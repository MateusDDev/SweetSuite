const express = require('express');
const { getAll, getById, createUser } = require('../controllers/user.controller');

const router = express.Router();

router.get('/', getAll);

router.get('/:id', getById);

router.post('/', createUser);

module.exports = router;