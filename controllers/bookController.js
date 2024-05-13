const Book = require('../models/Book');

let bookList = [];


const bookController = {
    getAllBooks: (req, res) => {
        res.render('bookList', { bookList });
    },
    addBook: (req, res) => {
        const { title, author, genre } = req.body;
        const newBook = new Book(title, author, genre);
        bookList.push(newBook);
        res.redirect('/books');
    },

    markAsRead: (req, res) => {
        const index = req.params.index;
        if (index >= 0 && index < bookList.length) {
            bookList[index].read = true;
        }
        res.redirect('/books');
    },

    removeBook: (req, res) => {
        const index = req.params.index;
        if (index >= 0 && index < bookList.length) {
            bookList.splice(index, 1);
        }
        res.redirect('/books');
    },
    getEditBookForm: (req, res) => {
        const index = req.params.index;
        const book = bookList[index];
        res.render('editBookForm', { index, book });
    },
    
    editBook: (req, res) => {
        const index = req.params.index;
        const { title, author, genre } = req.body;
        if (index >= 0 && index < bookList.length) {
            bookList[index] = { title, author, genre };
        }
        res.redirect('/books');
    }
};

module.exports = bookController;