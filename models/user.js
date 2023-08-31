const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret){
            delete ret.password;
            return ret;
        }
    },
   dailyStreak:{lastLogin: { type: Date }
}});

userSchema.pre('save', async function(next){
//'this' is the user document
//can't use arrow function here as they will override 'this'
if (!this.isModified('password')) return next();
//replace password with computed hash instead
this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
});

module.exports = mongoose.model('User', userSchema);