const express = require('express');
const { getUsers, addUser, getUserById } = require('../services/user');
const validateJWT = require('../auth/validateJWT');
const { hashPassword } = require('../services/loginServices');
const { existentUser } = require('../middlewares/usersMD');

const router = express.Router();

router.post('/', existentUser, async (req, res) => {
  const user = req.body;
  try {
    const password = await hashPassword(user.password);
    const newUser = {
      ...req.body,
      password,
    };
    addUser(newUser);
    res.status(200).json({ message: `${newUser.username} adionado com sucesso` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ocorreu um erro ao adicionar o usuário' });
  }
});

router.use(validateJWT);

router.get('/', async (req, res) => {
  try {
    const [result] = await getUsers();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ocorreu um erro ao buscar os usuários' });
  }
});

router.get('/id', async (req, res) => {
  const { id } = req.user;
  try {
    const [[user]] = await getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
});

module.exports = router;