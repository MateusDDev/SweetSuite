const connection = require('../db/connection');

const getUsers = () => connection.execute('SELECT * FROM users;');

const getUserByUsername = (username) => {
  const query = 'SELECT * FROM users WHERE username = ?';
  return connection.execute(query, [username]);
};

const getUserById = (id) => {
  const query = 'SELECT * FROM users WHERE id = ?';
  return connection.execute(query, [id]);
};

const addUser = (user) => {
  const query = `
  INSERT INTO users (username, password)
    VALUES(?, ?)
  `;
  const values = [
    user.username,
    user.password,
  ];
  return connection.execute(query, values);
};

module.exports = {
  getUsers, 
  getUserByUsername,
  getUserById,
  addUser,
};