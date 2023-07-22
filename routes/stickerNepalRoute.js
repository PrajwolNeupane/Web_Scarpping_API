import express from 'express'
import { getAllProducts ,getAllCategory, getDetail, getCategoryProducts} from '../controller/stickerController.js';

const router = express.Router();

router.get("/products",getAllProducts);
router.get('/category',getAllCategory)
router.get('/detail/:id',getDetail);
router.get('/category/:id',getCategoryProducts);

export default router;