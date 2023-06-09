import { body, validationResult } from 'express-validator';
import httpStatusCode from '../exceptions/httpStatusCode.js';
import { productRepositories } from '../repositories/index.js';

const create = async (req, res, next) => {
    try {
        const file = req.file.path;
        console.log(file);
        if(!file){
            const error = new Error('Please upload a file');
            return next(error)
        }
        const { name, price, describe,  categoryId } = req.body
        await productRepositories.insertProduct({
            name: name,
            price: price,
            avatar: file,
            describe: describe,
            categoryId: categoryId
        });

        res.status(httpStatusCode.INSERT_OK).json({
            status: 201,
            message: 'create product successfuly',
        });
    } catch (errors) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: errors.toString(),
        });
    }
};
const getAll = async (req,res) =>{
    try{
        const data = await productRepositories.getAll();
        res.status(httpStatusCode.INSERT_OK).json({
            status: 200,
            message: 'get product successfuly',
            data: data
        });
    }catch(errors){
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: errors.toString(),
        });
    }
}
const getById = async (req,res) =>{
    try{
        const id = req.params.id;
        const data = await productRepositories.getById(id);
        res.status(httpStatusCode.INSERT_OK).json({
            status: 200,
            message: 'get product by Id successfuly',
            data: data
        });
    }catch(errors){
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: errors.toString(),
        });
    }
}
export default {
    create,
    getAll,
    getById
};
