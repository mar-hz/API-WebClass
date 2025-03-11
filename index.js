import "dotenv/config";
import express from "express";
import indexRouter from "./rutas/index_rutas.js ";
import usersRouter from "./rutas/users_rutas.js";
import { connectDB } from "./utils/aiven.js";

const app = express();
const port = 5000;

const sql = connectDB();

app.use(express.json());
app.use(indexRouter);
app.use(usersRouter);

app.listen(port, console.log("http://localhost:"+ port));
