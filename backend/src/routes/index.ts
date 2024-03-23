import { Router } from 'express';
import productRoutes from './productRoutes';
import loginRoutes from './loginRoutes';
import userRoutes from './userRoutes';

const router = Router();

router.use('/products', productRoutes);
router.use('/login', loginRoutes);
router.use('/user', userRoutes);

export default router;
