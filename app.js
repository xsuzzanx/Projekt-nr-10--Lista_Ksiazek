
const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
//const open = require('open');

const app = express();


process.env.NODE_ENV = 'production';



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));




app.use('/books', bookRoutes);


 app.get('/', (req, res) => {
    res.render('app', { pageTitle: 'Strona główna' });
});


app.get('/bookList', (req, res) => {
    res.redirect('/books');
});


app.get('/addBook', (req, res) => {
    res.redirect('/books/new');
});

app.use((req, res, next) => {
    res.status(404).send("Sorry, the page you are looking for doesn't exist.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));