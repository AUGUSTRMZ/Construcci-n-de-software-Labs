const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const csrf = require('csurf');
const path = require('path');

const authRoutes = require('./routes/authRoutes');

const app = express();
const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: 'clave-super-secreta',
  resave: false,
  saveUninitialized: false
}));

app.use(csrfProtection);

app.use((req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  res.locals.isAuthenticated = req.session.isLoggedIn;
  next();
});

app.use(authRoutes);

app.use((req, res) => {
  res.status(404).send('<h1>Pagina no encontrada</h1>');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
