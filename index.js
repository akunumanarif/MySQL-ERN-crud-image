dotenv.config();
import express from "express";
import FileUpload from "express-fileupload";
import dotenv from "dotenv";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";
import Product from "./models/ProductModel.js";
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(ProductRoute);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
