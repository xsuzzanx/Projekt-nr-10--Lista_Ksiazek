

const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
//const open = require('open');

const apps = express();

// Ustawienie zmiennej środowiskowej NODE_ENV na "production"
process.env.NODE_ENV = 'production';

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


// Trasa obsługująca błąd "Cannot GET /"



// Trasy książek
app.use('/books', bookRoutes);

 //Obsługa głównej strony
 app.get('/', (req, res) => {
    res.render('app', { pageTitle: 'Strona główna' });
});


app.get('/bookList', (req, res) => {
    res.redirect('/books');
});

// Przekierowanie do formularza dodawania książki
app.get('/addBook', (req, res) => {
    res.redirect('/books/new');
});


// Obsługa błędu 404
app.use((req, res, next) => {
    res.status(404).send("Sorry, the page you are looking for doesn't exist.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));