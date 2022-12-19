import Product from "../models/ProductModel.js";
import path from "path";
import fs from "fs";
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
  const fileExtention = path.extname(file.name);
  const fileName = file.md5 + fileExtention;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedFileType = [".png", ".jpg", ".jpeg"];

  if (!allowedFileType.includes(fileExtention.toLowerCase()))
    return res.status(422).json({ msg: "Invalid File Type" });

  if (fileSize > 5000000)
    return res.status(422).json({ msg: "File must less than 5mb" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });

    try {
      await Product.create({ name: productTitle, img: fileName, url: url });
      res.status(201).json({ msg: "Product Successfully Created" });
    } catch (error) {
      res.status(500).json({ error });
    }
  });
};
export const updateProduct = (req, res) => {};
export const deleteProduct = async (req, res) => {
  const product = await Product.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!product) return res.status(404).json({ msg: "Product Not Found" });

  try {
    const filePath = `./public/images/${product.img}`;
    fs.unlinkSync(filePath);
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Product has been deleted" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
