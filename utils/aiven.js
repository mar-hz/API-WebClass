import fs from "fs";
import pg from "pg";

const config = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DBNAME,
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync("./utils/ca.pem").toString(),
  },
};

export const connectDB = () => {
    const client = new pg.Client(config);
    client.connect();
    return client;
}