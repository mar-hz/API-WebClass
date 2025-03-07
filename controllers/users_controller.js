import { connectDB } from "../utils/aiven.js";

export const getUsers = async (req, res) => {
    const sql = connectDB();
    const data = await sql.query("select * from users");
    console.log(data.rows);
    res.json(data.rows);
};