/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
const jwt = require('jsonwebtoken');
const express = require('express');
const { getByUsername } = require('../services/user');

const secret = process.env.JWT_SECRET;

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      const message = 'Insira o usuário e a senha';

      return res.status(401).json({ message });
    }

    const [[user]] = await getByUsername(username);

    if (user.username !== username || user.password !== password) {
      const message = 'Usuário ou senha inválidos';

      return res.status(401).json(message);
    }

    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    const data = {
      userId: user.id,
    };

    const token = jwt.sign({ data }, secret, jwtConfig);

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;