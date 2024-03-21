import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const productController = new ProductController();

const router = Router();

router.get(
  '/',
  (req, res) => productController.findAllProducts(req, res),
);

export default router;
