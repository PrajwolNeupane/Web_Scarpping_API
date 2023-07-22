import express from 'express'
import { getAllProducts ,getAllCategory, getDetail} from '../controller/stickerController.js';

const router = express.Router();

router.get("/products",getAllProducts);
router.get('/category',getAllCategory)
router.get('/detail/:id',getDetail);

export default router;