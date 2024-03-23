import { Router } from 'express';
import LoginController from '../controllers/LoginController';

const logincontroller = new LoginController();

const router = Router();

router.post(
  '/',
  (req, res) => logincontroller.login(req, res),
);

export default router;
