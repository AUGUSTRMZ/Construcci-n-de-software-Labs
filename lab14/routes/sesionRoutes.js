const express = require('express');
const router = express.Router();
const sesionController = require('../controllers/sesionController');

router.get('/', sesionController.getLogin);
router.post('/login', sesionController.postLogin);
router.get('/estado', sesionController.getEstado);
router.get('/logout', sesionController.logout);
router.get('/mensaje', sesionController.getMensaje);
router.get('/enviar-mensaje', sesionController.enviarFlash);

module.exports = router;
