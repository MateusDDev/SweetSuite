const UserService = require('../services/user.service');

const error500Message = 'Algo deu errado';

const getAll = async (_req, res) => {
  try {
    const users = await UserService.getAll();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Ocorreu um erro ao buscar os usuários' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.getById(id);
    
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error500Message });
  }
};

const createUser = async (req, res) => {
  try {
    const user = req.body;
    const newUser = await UserService.createUser(user);

    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAll,
  getById,
  createUser,
};