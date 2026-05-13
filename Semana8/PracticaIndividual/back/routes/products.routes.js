import {Router} from "express";
import { getProducts, createProducts, deleteProducts, updateProducts} from "../controllers/products.controller.js";

const ProductsRouter = Router();  //creamos un objeto router que puede tener GET POST PUT DELETE

ProductsRouter.get("/", getProducts); //definimos una ruta GET

ProductsRouter.post("/", createProducts); //ruta POST

ProductsRouter.delete("/:id", deleteProducts);

ProductsRouter.put("/:id", updateProducts);

export default ProductsRouter;
