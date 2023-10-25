import express from "express";
import { authenticateToken } from "../middlewares/authMiddleware.js";

import {
  createUser,
  loginUser,
  getDashboardPage,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/register").post(createUser);
router.route("/login").post(loginUser);
router.route("/dashboard").get(authenticateToken, getDashboardPage);

export default router;
