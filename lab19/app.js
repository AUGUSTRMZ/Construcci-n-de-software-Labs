const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(session({
    secret: 'secreto123',
    resave: false,
    saveUninitialized: false
}));

app.set('view engine', 'ejs');

const authRoutes = require('./routes/auth');
app.use(authRoutes);

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));