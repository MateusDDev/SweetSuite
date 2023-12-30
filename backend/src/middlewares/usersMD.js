const { getUsers } = require('../services/user');

const existentUser = async (req, res, next) => {
  const user = req.body;
  try {
    const [users] = await getUsers();
    const exist = users.some((u) => u.username === user.username);

    if (exist) return res.status(500).json({ message: 'Nome de usuário já existe' });

    next();
  } catch (error) {
    return res.status(401).json({ message: error });
  }
};

module.exports = {
  existentUser,
};