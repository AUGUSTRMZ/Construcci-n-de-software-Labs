const express = require('express');
const router = express.Router();

router.get('/info', (req, res) => {
  res.render('index', { titulo: 'Estas en Informacion General' });
});

router.get('/about', (req, res) => {
  res.render('index', { titulo: 'Estas en about' });
});

router.get('/contacto', (req, res) => {
  res.render('index', { titulo: 'Estas en contacto' });
});

module.exports = router;
