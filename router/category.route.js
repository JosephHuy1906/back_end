import express from "express";
import { categoryController } from "../controllers/index.js";

const router = express.Router();

router.get('/', categoryController.getAll)
router.get('/:id', categoryController.getById)
router.post('/', categoryController.create)
router.put('/:id')
router.delete('/:id')

export default router