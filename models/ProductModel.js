import { Sequelize } from "sequelize";
import DB from "../config/Database";

const { DataTypes } = Sequelize;
const Product = DB.define(
  "product",
  {
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    url: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await DB.sync();
})();
