import express from 'express'
import { getAllProducts ,getAllCategory} from '../controller/stickerController.js';

const router = express.Router();

router.get("/products",getAllProducts);
router.get('/category',getAllCategory)

export default router;