import Product from "../models/ProductModel.js";

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
export const saveProduct = (req, res) => {};
export const updateProduct = (req, res) => {};
export const deleteProduct = (req, res) => {};
