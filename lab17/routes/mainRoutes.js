const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainControllers');

router.get('/', controller.getPersonas);
router.get('/add', controller.getForm);
router.post('/add', controller.postForm);
router.get('/edit/:persona_id', controller.getEdit);
router.post('/edit', controller.postEdit);

module.exports = router;