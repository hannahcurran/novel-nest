const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
//all paths start with '/api/users'

//POST /api/users (create a user - sign up)
router.post('/', usersCtrl.create);

router.post('/login', usersCtrl.login);

//to track users login for streak
router.post('/:userId/login');

module.exports = router;