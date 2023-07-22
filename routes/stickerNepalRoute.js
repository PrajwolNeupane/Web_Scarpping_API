import express from 'express'
import { getAllProducts } from '../controller/stickerController.js';

const router = express.Router();

router.get("/products",getAllProducts);

export default router;