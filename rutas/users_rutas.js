import { Router } from "express";
import { getUsers, getUser, postUser, putUser, deleteUser } from "../controllers/users_controller.js";

const router = Router();

router.get('/users/', getUsers);
router.get('/users/:id', getUser);
router.post('/user/', postUser);
router.put('/putuser/:id', putUser);
router.delete('/deleteuser/:id', putUser);

export default router;