import { Router } from "express";
import { getUsers } from "../controllers/users_controller.js";

const router = Router();

router.get('/users/', getUsers);

export default router;