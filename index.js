dotenv.config();
import express from "express";
import FileUpload from "express-fileupload";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(FileUpload());

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
