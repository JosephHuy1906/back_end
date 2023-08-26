import express from 'express';
import { productController } from '../controllers/index.js';
import upload from '../configs/multer.js'
const router = express.Router();

router.get('/', productController.getAll);
router.post('/', upload.single('images'), productController.create);
router.post('/create', productController.Insert);
router.get('/cate1', productController.getCate1);
router.get('/cate2', productController.getCate2);
router.get('/search', productController.getProductSearch);
router.get('/best', productController.getProductBest);
router.get('/:id', productController.getById);
router.get('/cate/:id', productController.getCateById);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
router.get('/img/:id');

export default router;
