const express = require('express');
const router = express.Router();

const comentarioController = require('../controllers/comentarioController');

router.get('/', comentarioController.getFormulario);
router.get('/comentarios', comentarioController.getComentarios);
router.post('/add', comentarioController.postComentario);

module.exports = router;
