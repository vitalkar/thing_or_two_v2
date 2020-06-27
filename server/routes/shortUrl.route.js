const express = require('express');
const router = express.Router();
const shortUrlController = require('../controllers/shortUrl.controller');
//handlers
router.get('/readAll', shortUrlController.readAll);
router.post('/create', shortUrlController.create);
module.exports = router;