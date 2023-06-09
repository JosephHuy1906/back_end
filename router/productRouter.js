import express from 'express';
import { productController } from '../controllers/index.js';
import upload from '../configs/multer.js'
const router = express.Router();

router.get('/', productController.getAll);
router.post('/', upload.single('images'), productController.create);
router.get('/cate1');
router.get('/cate2');
router.get('/search');
router.get('/best');
router.get('/:id', productController.getById);
router.get('/cate/:id');
router.put('/:id');
router.delete('/:id');
router.get('/img/:id');

export default router;
