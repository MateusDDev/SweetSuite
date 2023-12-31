const express = require('express');
const { getAll, getById, createUser } = require('../controllers/user.controller');
const validateJWT = require('../auth/validateJWT');

const router = express.Router();

router.post('/', createUser);

router.use(validateJWT);

router.get('/', getAll);

router.get('/id', getById);

module.exports = router;