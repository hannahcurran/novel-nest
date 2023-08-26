const express = require('express');
const router = express.Router();
const wantBooksCtrl = require('../../controllers/api/want-book');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


//all paths start with '/api/users'
router.post('/addWantBook', ensureLoggedIn, wantBooksCtrl.addWantBook);
router.get('/getWantBook', ensureLoggedIn, wantBooksCtrl.getWantBook);
router.delete('/deleteWantBook/:bookId', ensureLoggedIn, wantBooksCtrl.deleteWantBook);

module.exports = router;