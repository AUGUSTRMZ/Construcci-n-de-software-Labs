const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rutas = require('./routes/mainRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(rutas);

// Ruta 404
app.use((req, res) => {
  res.status(404).send('<h1>Página no encontrada</h1>');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});