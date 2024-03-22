import { Router } from 'express';
import productRoutes from './productRoutes';
import loginRoutes from './loginRoutes';

const router = Router();

router.use('/products', productRoutes);
router.use('/login', loginRoutes);

export default router;
