const express = require('express');
const router = express.Router();
const readBooksCtrl = require('../../controllers/api/read-books');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


//all paths start with '/api/users'
router.post('/addReadBook', ensureLoggedIn, readBooksCtrl.addReadBook);
router.get('/getReadBook', ensureLoggedIn, readBooksCtrl.getReadBook);
router.delete('/deleteReadBook/:bookId', ensureLoggedIn, readBooksCtrl.deleteReadBook);
router.put('/updateReview/:bookId', readBooksCtrl.updateReview);
// router.get('/getReadBookWithFavoriteStatus/:userId', readBooksCtrl.getReadBookWithFavoriteStatus);
router.put('/toggleFavoriteStatus/:bookId', readBooksCtrl.toggleFavoriteStatus);


module.exports = router;