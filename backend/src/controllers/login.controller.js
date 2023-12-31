/* eslint-disable max-lines-per-function */
const jwt = require('jsonwebtoken');
const UserService = require('../services/user.service');

const secret = process.env.JWT_SECRET;

const isBodyValid = (username, password) => username && password;

const generateToken = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!isBodyValid(username, password)) {
      return res.status(401).json({ message: 'É necessário usuário e senha para continuar' });
    }

    const user = await UserService.getByUsername(username);

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Usuário ou senha inválidos' });
    }

    const jwtConfig = {
      expiresIn: '2h',
      algorithm: 'HS256',
    };

    const data = {
      userId: user.id,
    };

    const token = jwt.sign({ data }, secret, jwtConfig);

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Ocorreu um erro na verificação' });
  }
};

module.exports = {
  generateToken,
};