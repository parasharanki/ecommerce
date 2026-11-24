import Router from "express"
import {addProduct} from "../controllers/Product.js";
import upload from "../middlewares/uploadMiddlewear.js";

const productRouter =Router();

productRouter.post("/add",upload.single("image"), addProduct);


export default productRouter;
