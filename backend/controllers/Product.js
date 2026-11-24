 import Product from "../model/product.js";



export async function addProduct(req, res) {
  try {
    const {
      name,
      slug,
      category,
      actualPrice,
      discountedPrice,
      description
    } = req.body;

if(!req.file){

  return res.status(400).json({
    success: false,
    message: "upload an image "
  })
}
// console.log(req.file)
const Image = req.file.filename
console.log(Image)

    const newProduct = new Product({
      name,
      slug,
      category,
      actualPrice,
      discountedPrice,
      description,
      image: Image                                                                               
    });

    await newProduct.save();

    return res.status(201).json({
      message: "Product Added",
      newProduct
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
}
