const express = require('express');
const bodyParser = require('body-parser');

const generalRoutes = require('./routes/generalRoutes');
const formRoutes = require('./routes/formRoutes');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/general', generalRoutes);
app.use('/form', formRoutes);

// Ruta 404
app.use((req, res) => {
  res.status(404).send('<h1>404 - Ruta no encontrada</h1>');
});

app.listen(3000, () => {
  console.log('Entra a http://localhost:3000');
});
