const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login,
    // updateUserStreak
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

/*-- Helper Functions --*/

function createJWT(user) {
    return jwt.sign(
        // data payload
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}


// const updateUserStreak = async (user) => {
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);  // reset time part, to compare dates only

//     if (!user.lastLogin) {
//         // First time the user logs in
//         user.lastLogin = today;
//         user.dailyStreak = 1;
//     } else {
//         const lastLoginDate = new Date(user.lastLogin);
//         lastLoginDate.setHours(0, 0, 0, 0);
        
//         const dayDifference = (today - lastLoginDate) / (1000 * 60 * 60 * 24);  // Calculate day difference

//         if (dayDifference === 1) {
//             // If the user logs in consecutively
//             user.dailyStreak += 1;
//             user.lastLogin = today;
//         } else if (dayDifference > 1) {
//             // If more than one day has passed since the last login
//             user.dailyStreak = 1;
//             user.lastLogin = today;
//         }
//         // If dayDifference is 0, no need to change anything, it means the user has already logged in today.
//     }

//     return user.save();  // Save updates to the database
// }
