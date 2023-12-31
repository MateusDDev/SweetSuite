const express = require('express');
const { generateToken } = require('../controllers/login.controller');

const router = express.Router();

router.post('/', generateToken);

module.exports = router;