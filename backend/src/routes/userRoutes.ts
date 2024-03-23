import { Router } from 'express';
import UserController from '../controllers/UserController';
import Validations from '../middlewares/Validations';

const userController = new UserController();

const router = Router();

router.get(
  '/',
  Validations.ValidateLogin,
  (req, res) => userController.findUserById(req, res),
);

export default router;
