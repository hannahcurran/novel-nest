const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login,
    dailyStreak
   };



async function create(req, res) {
    try {
        // add user to the db
        const user = await User.create(req.body);
        const token = createJWT(user);
        res.json(token);

    } catch (err) {
        res.status(400).json(err);

    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new Error();
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error();
        res.json(createJWT(user));
    }catch {
        res.status(400).json('Bad Credentials');
    }

}

async function dailyStreak(req, res){

    const userId = req.params.userId;
    try {
        const user = await User.findById(userId);
        if (user) {
            const today = new Date().toISOString().slice(0, 10); 
            const lastLoginDate = user.lastLogin ? user.lastLogin.toISOString().slice(0, 10) : null;

            if (lastLoginDate !== today) {
                user.streak += 1;
            }

            user.lastLogin = new Date();
            await user.save();

            return res.json(user);
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error updating login:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}


/*-- Helper Functions --*/

function createJWT(user) {
    return jwt.sign(
        // data payload
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}