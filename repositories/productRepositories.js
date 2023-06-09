import Exception from '../exceptions/Exception.js';
import { ProductModel, Usermodel } from '../models/index.js';


const insertProduct = async ({ name, price, describe, avatar, categoryId }) => {
    try {
        const newProduct = await ProductModel.create({
            name,
            price,
            describe,
            avatar: '',
            categoryId,
        });
        return newProduct;
    } catch (err) {
        if (!!err.errors) {
            throw new Exception(err);
        } else {
            throw new Exception(Exception);
        }
    }
};

const getAll = async () => {
    const product = await ProductModel.find();
    return product;
};

const getById = async (id) => {
    const product = await ProductModel.findById(id);
    return product;
};


const getCate1 = async () =>{
    const product = await ProductModel.find().limit(6).skip(Math.random() * count);
    return product;
}

export default {
    insertProduct,
    getAll,
    getById
};
