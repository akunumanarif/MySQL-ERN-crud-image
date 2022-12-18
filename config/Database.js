import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";

const DB = new Sequelize("upload_db", "root", process.env.DB_PASS, {
  host: "localhost",
  dialect: "mysql",
});

export default DB;
