import express from 'express'
import userRouter from './userRouter.js';
import productRouter from './product.route.js'
import categoryRouter from './category.route.js'

const rootRouter = express.Router();

rootRouter.use('/user',userRouter);
rootRouter.use('/product',productRouter);
rootRouter.use('/category', categoryRouter)

export default rootRouter

