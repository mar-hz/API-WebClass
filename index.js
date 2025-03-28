import "dotenv/config";
import express from "express";
import indexRouter from "./rutas/index_rutas.js ";
import usersRouter from "./rutas/users_rutas.js";
import loginRouter from "./rutas/login_rutas.js";
import morgan from "morgan";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(indexRouter);
app.use(usersRouter);
app.use(loginRouter);

app.listen(port, console.log("http://localhost:"+ port));
