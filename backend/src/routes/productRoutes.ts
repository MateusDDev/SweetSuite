import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const productController = new ProductController();

const router = Router();

router.get(
  '/',
  (req, res) => productController.findAllProducts(req, res),
);

router.get(
  '/search',
  (req, res) => productController.findAllProductsByName(req, res),
);

router.get(
  '/:id',
  (req, res) => productController.findProductById(req, res),
);

router.put(
  '/:id',
  (req, res) => productController.updateProduct(req, res),
);

router.post(
  '/',
  (req, res) => productController.createProduct(req, res),
);

router.delete(
  '/:id',
  (req, res) => productController.removeProduct(req, res),
);

export default router;
