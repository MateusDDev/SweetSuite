const UserService = require('../services/user.service');
const { hashPassword } = require('../utils/handlePassword');

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
    const { id } = req.user;
    const user = await UserService.getById(id);

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error500Message });
  }
};

const createUser = async (req, res) => {
  try {
    const user = req.body;
    const password = await hashPassword(user.password);
    const addHash = {
      ...req.body,
      password,
    };
    const newUser = await UserService.createUser(addHash);

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