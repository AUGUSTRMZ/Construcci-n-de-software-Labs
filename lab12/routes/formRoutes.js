const express = require('express');
const path = require('path');

const router = express.Router();


const comentarios = [];

router.get('/', (req, res) => {
  res.render('form', { titulo: 'Formulario' });
});

router.post('/submit', (req, res) => {
  const { nombre, comentario } = req.body;
  comentarios.push({ nombre, comentario });
  res.redirect('/form/comentarios');
});

router.get('/comentarios', (req, res) => {
  res.render('comentarios', { titulo: 'Comentarios', comentarios });
});

module.exports = router;
