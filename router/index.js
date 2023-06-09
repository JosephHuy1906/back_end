import express from 'express'
import userRouter from './userRouter.js';
import ProductRouter from './productRouter.js'

const rootRouter = express.Router();

rootRouter.use('/user',userRouter);
rootRouter.use('/product',ProductRouter);

export default rootRouter

