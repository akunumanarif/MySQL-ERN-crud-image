import { Sequelize } from "sequelize";

const DB = new Sequelize("upload_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default DB;
