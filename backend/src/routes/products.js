const express = require('express');
const productCtrl = require('../controllers/product');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const [result] = await productCtrl.getProducts();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ocorreu um erro ao buscar os produtos' });
  }
});

module.exports = router;