import express from "express";
import {
  createProduct,
  deleteProduct,
  getProductID,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductID);

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export const ProductRoute = router;
