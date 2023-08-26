import Exception from '../exceptions/Exception.js';
import productSchema from '../models/schemas/product.schema.js';

const insertProduct = async ({ name, price, describe, hinh, avatar, categoryId }) => {
    try {
        const newProduct = await productSchema.create({
            name,
            price,
            avatar,
            hinh,
            describe,
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
    const product = await productSchema.find();
    return product;
};

const getById = async (id) => {
    const product = await productSchema.findById(id).populate({
        path: 'categoryId',
        strictPopulate: true,
        select: 'name',
    });
    return product;
};

const getCate1 = async () => {
    const product = await productSchema
        .find()
        .limit(6)
        .skip(Math.random() * 30);
    return product;
};

const getCateById = async (id) => {
    const product = await productSchema
        .find({ categoryId: id })
        .limit(6)
        .skip(Math.random() * 6);
    return product;
};

const getCate2 = async () => {
    const product = await productSchema
        .find()
        .limit(3)
        .skip(Math.random() * 30);
    return product;
};

const getProductBest = async () => {
    const product = await productSchema
        .find()
        .limit(2)
        .skip(Math.random() * 10);
    return product;
};

const getProductSearch = async () => {
    const product = await productSchema.find({}, { name: 1, avatar: 1 });
    return product;
};

const updateProduct = async ({ name, price, describe, avatar, hinh, categoryId }) => {
    try {
        const existingUser = await productSchema.findOne({ email }).exec();
        if (!existingUser) {
            throw new Exception(Exception.ERROR_EXIST_PRODUCT);
        } else {
            const newProduct = await productSchema.create({
                name: name,
                price: price,
                describe: describe,
                avatar: avatar,
                hinh: hinh,
                categoryId: categoryId,
            });
            return newProduct;
        }
    } catch (err) {
        throw new Exception(Exception.CANNOT_UPDATE_PRODUCT);
    }
};

const deleteProduct = async (id) => {
    const product = await productSchema.deleteOne({ _id: id });
    return product;
};

export default {
    insertProduct,
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
