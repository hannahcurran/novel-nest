const express = require('express');
const router = express.Router();
const currentBooksCtrl = require('../../controllers/api/current-book');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


//all paths start with '/api/users'
router.post('/addCurrentBook', ensureLoggedIn, currentBooksCtrl.addCurrentBook);
router.get('/getCurrentBook', ensureLoggedIn, currentBooksCtrl.getCurrentBook);
router.delete('/deleteCurrentBook/:bookId', ensureLoggedIn, currentBooksCtrl.deleteCurrentBook);
router.put('/updateBookProgress/:bookId', ensureLoggedIn, currentBooksCtrl.updateBookProgress);


module.exports = router;


