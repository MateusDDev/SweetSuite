const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll();
  return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

const getByUsername = async (username) => {
  const user = await User.findOne({ where: { username } });
  return user;
};

const updateUser = async (newUser, id) => {
  const updatedUser = await User.update(newUser, { where: { id } });
  return updatedUser;
};

const createUser = async (newUser) => {
  const user = await User.create(newUser);
  return user;
};

const removeUser = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = {
  getAll,
  getById,
  getByUsername,
  updateUser,
  createUser,
  removeUser,
};