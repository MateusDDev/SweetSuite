const UserService = require('../services/user.service');

const getAll = async (_req, res) => {
  try {
    const users = await UserService.getAll();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Ocorreu um erro ao buscar os usuários' });
  }
};

module.exports = {
  getAll,
};