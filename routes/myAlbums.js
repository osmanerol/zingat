var express = require('express');
var router = express.Router();
const myAlbumsController = require('../controllers/myAlbums');

router.get('/', myAlbumsController.getMyAlbums);

module.exports = router;
