import Product from "../models/ProductModel.js";
import path from "path";
export const getProduct = async (req, res) => {
  try {
    const response = await Product.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json(error);
  }
};
export const getProductById = async (req, res) => {
  try {
    const response = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json(error);
  }
};
export const saveProduct = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Upload" });
  const productTitle = req.body.title;
  const file = req.files.file;
  const fileSize = file.data.length;
  const fileExtention = file.extname(file.name);
  const fileName = file.md5 + fileExtention;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedFileType = [".png", ".jpg", ".jpeg"];

  if (!allowedFileType.includes(fileExtention.toLoweCase()))
    return res.status(422).json({ msg: "Invalid File Type" });
};
export const updateProduct = (req, res) => {};
export const deleteProduct = (req, res) => {};
