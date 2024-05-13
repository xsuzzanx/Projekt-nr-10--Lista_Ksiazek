const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.getAllBooks);
router.get('/new', (req, res) => {
    res.render('addBookForm');
});
router.post('/', bookController.addBook);
router.post('/:index', (req, res) => {
   
    res.redirect('/books');
});
router.get('/:index/read', bookController.markAsRead);
router.get('/:index/remove', bookController.removeBook);

router.get('/:index/edit', bookController.getEditBookForm);
router.post('/:index/edit', bookController.editBook);

module.exports = router;