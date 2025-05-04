const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Estas en la ruta raiz'));
router.get('/info', (req, res) => res.send('Estas en la ruta info'));
router.get('/about', (req, res) => res.send('Estas en la ruta about'));

module.exports = router;
