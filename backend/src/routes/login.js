/* eslint-disable max-lines-per-function */
const jwt = require('jsonwebtoken');
const express = require('express');

const secret = process.env.JWT_SECRET;

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!(username && password)) {
      const message = 'Insira o usuário e a senha';

      return res.status(401).json({ message });
    }

    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    const data = {
      username,
    };

    const token = jwt.sign({ data }, secret, jwtConfig);

    res.status(200).json({ token });
  } catch (error) {
    console.log(error.message);
    const message = 'Ocorreu um erro no servidor';
    res.status(500).json({ message });
  }
});

module.exports = router;