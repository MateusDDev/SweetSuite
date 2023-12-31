const ProductService = require('../services/product.service');

const error500Message = 'Algo deu errado';

const getAll = async (_req, res) => {
  try {
    const products = await ProductService.getAll();
    return res.status(200).json(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Ocorreu um erro ao buscar os produtos' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductService.getById(id);

    if (!product) return res.status(404).json({ message: 'Produto não encontrado' });

    return res.status(200).json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error500Message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = req.body;
    const newProduct = await ProductService.createProduct(product);

    return res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error500Message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = req.body;
    const updatedProduct = await ProductService.updateProduct(product, id);

    return res.status(201).json(updatedProduct);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error500Message });
  }
};

const removeProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await ProductService.removeProduct(id);

    return res.status(201).json({ message: 'Usuário excluído com sucesso' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAll,
  getById,
  createProduct,
  updateProduct,
  removeProduct,
};