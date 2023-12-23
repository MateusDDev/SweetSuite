const express = require('express');
const { 
  getProducts, 
  addProduct, 
  updateProduct, 
  removeProduct, 
  getProductsById } = require('../controllers/product');

const router = express.Router();

router.get('/', async (_, res) => {
  try {
    const [result] = await getProducts();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ocorreu um erro ao buscar os produtos' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await getProductsById(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ocorreu um erro ao buscar os produtos' });
  }
});

router.post('/', async (req, res) => {
  const product = req.body;
  try {
    addProduct(product);
    res.status(200).json({ message: `${product.name} adionado com sucesso` });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Ocorreu um erro ao adicionar o produto' });
  }
});

router.put('/:id', async (req, res) => {
  const product = req.body;
  const { id } = req.params;
  try {
    updateProduct(product, id);
    res.status(200).json({ message: `${product.name} atualizado com sucesso` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ocorreu um erro ao atualizar o produto' });
  }
});

router.delete('/:id', async (req, res) => {
  const product = req.body;
  const { id } = req.params;
  try {
    removeProduct(id);
    res.status(200).json({ message: `${product.name} removido com sucesso` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ocorreu um erro ao remover o produto' });
  }
});

module.exports = router;