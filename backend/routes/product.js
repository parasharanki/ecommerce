import Router from "express"
import {addProduct, getProducts} from "../controllers/Product.js";
import upload from "../middlewares/uploadMiddlewear.js";

const productRouter =Router();

productRouter.post("/add",upload.single("image"), addProduct);
productRouter.get("/all", getProducts);


export default productRouter;
