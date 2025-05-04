const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/form.html'));
});

router.post('/submit', (req, res) => {
  const { nombre, comentario } = req.body;
  const entrada = `Nombre: ${nombre} - Comentario: ${comentario}\n`;
  fs.appendFileSync('datos.txt', entrada);
  res.send('¡Comentario guardado en datos.txt');
});

module.exports = router;
