import { body, validationResult } from 'express-validator';
import httpStatusCode from '../exceptions/httpStatusCode.js';
import { productRepositories } from '../repositories/index.js';

const create = async (req, res, next) => {
    try {
        const file = req.file.filename;
        console.log(file);
        if (!file) {
            const error = new Error('Please upload a file');
            return next(error);
        }
        const { name, price, describe, categoryId } = req.body;
        await productRepositories.insertProduct({
            name: name,
            price: price,
            avatar: file,
            describe: describe,
            categoryId: categoryId,
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
const Insert = async (req, res, next) => {
    try {
        const { name, price, describe, avatar, hinh, categoryId } = req.body;
        console.log({ name, price, describe, avatar, hinh, categoryId });
        await productRepositories.insertProduct({
            name: name,
            price: price,
            avatar: avatar,
            hinh: hinh,
            describe: describe,
            categoryId: categoryId,
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
const getAll = async (req, res) => {
    try {
        const data = await productRepositories.getAll();
        res.status(httpStatusCode.INSERT_OK).json({
            status: 200,
            message: 'get product successfuly',
            data: data,
        });
    } catch (errors) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: errors.toString(),
        });
    }
};
const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await productRepositories.getById(id);
        res.status(httpStatusCode.INSERT_OK).json({
            status: 200,
            message: 'get product by Id successfuly',
            data: data,
        });
    } catch (errors) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: errors.toString(),
        });
    }
};
const getCateById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await productRepositories.getCateById(id);
        res.status(httpStatusCode.INSERT_OK).json({
            status: 200,
            message: 'get product by cate Id successfuly',
            data: data,
        });
    } catch (errors) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: errors.toString(),
        });
    }
};
const getCate1 = async (req, res) => {
    try {
        const data = await productRepositories.getCate1();
        res.status(httpStatusCode.INSERT_OK).json({
            status: 200,
            message: 'get product successfuly',
            data: data,
        });
    } catch (errors) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: errors.toString(),
        });
    }
};
const getCate2 = async (req, res) => {
    try {
        const data = await productRepositories.getCate2();
        res.status(httpStatusCode.INSERT_OK).json({
            status: 200,
            message: 'get product successfuly',
            data: data,
        });
    } catch (errors) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: errors.toString(),
        });
    }
};
const getProductBest = async (req, res) => {
    try {
        const data = await productRepositories.getProductBest();
        res.status(httpStatusCode.INSERT_OK).json({
            status: 200,
            message: 'get product successfuly',
            data: data,
        });
    } catch (errors) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: errors.toString(),
        });
    }
};
const getProductSearch = async (req, res) => {
    try {
        const data = await productRepositories.getProductSearch();
        res.status(httpStatusCode.INSERT_OK).json({
            status: 200,
            message: 'get product successfuly',
            data: data,
        });
    } catch (errors) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: errors.toString(),
        });
    }
};
const updateProduct = async (req, res) => {
    const {
        name,
        price,
        describe,
        avatar,
        hinh: [],
        categoryId,
    } = req.body;
    try {
        const product = await productRepositories.updateProduct(req.body);

        if (!product) {
            res.status(400).json({
                message: 'Input exists',
            });
        }
        res.status(httpStatusCode.INSERT_OK).json({
            message: 'Update product successfuly',
        });
    } catch (err) {
        res.status(httpStatusCode.BAD_REQUEST).json({
            message: err.toString(),
        });
    }
};
const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        await productRepositories.deleteProduct(id);
        res.status(httpStatusCode.INSERT_OK).json({
            status: 200,
            message: 'delete product successfuly',
        });
    } catch (errors) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: errors.toString(),
        });
    }
};
export default {
    create,
    Insert,
    getAll,
    getById,
    getCate1,
    getCate2,
    getProductBest,
    getProductSearch,
    updateProduct,
    deleteProduct,
    getCateById,
};
