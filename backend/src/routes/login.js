/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
const jwt = require('jsonwebtoken');
const express = require('express');
const { getUserByUsername } = require('../services/user');
const { comparePasswords } = require('../services/loginServices');

const secret = process.env.JWT_SECRET;

const router = express.Router();

const isValidPassword = async (username, newPassword) => {
  const [[user]] = await getUserByUsername(username);
  return user && comparePasswords(newPassword, user.password);
};

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      const message = 'Insira o usuário e a senha';

      return res.status(401).json({ message });
    }

    const validPassword = await isValidPassword(username, password);

    if (!validPassword) {
      console.log(isValidPassword(username, password));
      const message = 'Usuário ou senha inválidos';
      return res.status(401).json({ message });
    }

    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };

    const [[user]] = await getUserByUsername(username);

    const data = {
      userId: user.id,
    };

    const token = jwt.sign({ data }, secret, jwtConfig);

    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;