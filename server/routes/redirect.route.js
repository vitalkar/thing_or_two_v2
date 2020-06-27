const router = require('express').Router();
const redirectController = require('../controllers/redirect.controller');
//handlers
//TODO allow empty
router.get('/:suffix?', redirectController.redirectTo);
module.exports = router;