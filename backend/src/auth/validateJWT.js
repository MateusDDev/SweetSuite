const jwt = require('jsonwebtoken');
const { getUserById } = require('../services/user');

const secret = process.env.JWT_SECRET;

const extractToken = (bearerToken) => bearerToken.split(' ')[1];

const validateJWT = async (req, res, next) => {
  const bearerToken = req.header('Authorization');

  if (!bearerToken) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }

  const token = extractToken(bearerToken);

  try {
    const decoded = jwt.verify(token, secret);

    const [[user]] = await getUserById(decoded.data.userId);

    if (!user) {
      return res.status(401).json({ message: 'Erro ao procurar usuário do token.' });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

module.exports = validateJWT;