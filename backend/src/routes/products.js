const express = require('express');
const { 
  getAll, 
  getById, 
  createProduct, 
  updateProduct,
  removeProduct,
  searchProduct, 
} = require('../controllers/product.controller');

const router = express.Router();

router.get('/', getAll);

router.get('/search', searchProduct);

router.get('/:id', getById);

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', removeProduct);

module.exports = router;