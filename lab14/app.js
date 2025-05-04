const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const path = require('path');

const sesionRoutes = require('./routes/sesionRoutes');

const app = express();

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Middlewares base
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configurar sesiones
app.use(session({
  secret: 'clave_secreta_segura_y_larga',
  resave: false,
  saveUninitialized: false
}));

// Flash
app.use(flash());

// Rutas
app.use(sesionRoutes);

// Ruta 404
app.use((req, res) => {
  res.status(404).render('404', { titulo: 'Pagina no encontrada' });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
