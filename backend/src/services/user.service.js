const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll();
  return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

const update = async (newUser, id) => {
  const updatedUser = await User.update(newUser, { where: { id } });
  return updatedUser;
};

const create = async (newUser) => {
  const user = await User.create(newUser);
  return user;
};

const remove = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = {
  getAll,
  getById,
  update,
  create,
  remove,
};