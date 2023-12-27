const express = require('express');
const { getUsers, addUser, getUserById } = require('../services/user');
const validateJWT = require('../auth/validateJWT');

const router = express.Router();

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

router.get('/:id', async (req, res) => {
  const { id } = req.user;
  try {
    const [[user]] = await getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
});

router.post('/', (req, res) => {
  const user = req.body;
  try {
    addUser(user);
    res.status(200).json({ message: `${user} adionado com sucesso` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ocorreu um erro ao adicionar o usuário' });
  }
});

module.exports = router;