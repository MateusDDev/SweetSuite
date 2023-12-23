const connection = require('../db/connection');

const getProducts = () => connection.execute('SELECT * FROM products;');

const getProductsById = (id) => connection.execute('SELECT * FROM products WHERE id = ?', [id]);

const addProduct = (product) => {
  const query = `INSERT INTO products (name, description, price, quantity)
                  VALUES (?, ?, ?, ?);`;

  const values = [
    product.name, 
    product.description, 
    product.price, 
    product.quantity,
  ];

  return connection.execute(query, values);
};

const updateProduct = (product, id) => {
  const query = `UPDATE products
                  SET name = ?, description = ?, price = ?, quantity = ?
                WHERE id = ?;`;

  const values = [
    product.name,
    product.description,
    product.price,
    product.quantity,
  ];

  connection.execute(query, [...values, id]);
};

const removeProduct = (id) => {
  const query = 'DELETE FROM products WHERE id = ?;';

  return connection.execute(query, [id]);
};

module.exports = {
  getProducts,
  getProductsById,
  addProduct,
  updateProduct,
  removeProduct,
};