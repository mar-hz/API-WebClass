import { Router } from "express";
import { marco, ping, raiz } from "../controllers/index_controller.js";

const router = Router();

router.get('/', raiz);

router.get('/marco', marco);

router.get('/ping', ping);

export default router;