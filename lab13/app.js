const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const comentarioRoutes = require('./routes/comentarioRoutes');

const app = express();

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use(comentarioRoutes);

// Ruta 404
app.use((req, res) => {
  res.status(404).render('404', { titulo: 'Página no encontrada' });
});

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});
