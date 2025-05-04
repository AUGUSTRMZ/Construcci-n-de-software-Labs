const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const generalRoutes = require('./routes/generalRoutes');
const formRoutes = require('./routes/formRoutes');

const app = express();

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/general', generalRoutes);
app.use('/form', formRoutes);

// Ruta principal
app.get('/', (req, res) => {
  res.render('index', { titulo: 'Inicio' });
});

// Ruta 404
app.use((req, res) => {
  res.status(404).render('404', { titulo: 'No encontrado' });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
