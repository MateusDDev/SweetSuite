const connection = require('../db/connection');

const getProducts = () => connection.execute('SELECT * FROM products;');

module.exports = {
  getProducts,
};