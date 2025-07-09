const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');

router.post('/shorten', urlController.shortenUrl);
router.get('/url/:id', urlController.getUrlById);
router.get('/urls/date/:date', urlController.getUrlsByDate);
router.get('/short/:shortUrl', urlController.getUrlByShort);

module.exports = router;
