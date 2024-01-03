const { Op } = require('sequelize');

const { Product } = require('../models');

const getAll = async () => {
  const products = await Product.findAll();
  return products;
};

const getById = async (id) => {
  const product = await Product.findByPk(id);
  return product;
};

const updateProduct = async (newProduct, id) => {
  const updatedProduct = await Product.update(newProduct, { where: { id } });
  return updatedProduct;
};

const createProduct = async (newProduct) => {
  const product = await Product.create(newProduct);
  return product;
};

const removeProduct = async (id) => {
  await Product.destroy({ where: { id } });
};

const searchProduct = async (query) => {
  const products = await Product.findAll({
    where: {
      name: {
        [Op.like]: `%${query}%`,
      },
    },
  });
  return products;
};

module.exports = {
  getAll,
  getById,
  updateProduct,
  createProduct,
  removeProduct,
  searchProduct,
};