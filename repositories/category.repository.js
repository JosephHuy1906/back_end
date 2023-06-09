import Exception from '../exceptions/Exception.js';
import { CategoryModel } from '../models/index.js';



const getAll = async () => {
    const category = await CategoryModel.find();
    return category;
};

const getById = async (id) => {
    const category = await CategoryModel.findById(id);
    return category;
};
const create = async ({name}) => {
    try {
        const newProduct = await CategoryModel.create({
            name
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
const update = async (id, name) => {
    try {
        const existing = await CategoryModel.findById(id).exec();
        if (!existing) {
            throw new Exception(Exception.ERROR_EXIST_PRODUCT);
        } else {
            const newCategory = await ProductModel.create({
                name: name
            });
            return newCategory;
        }
    } catch (err) {
        throw new Exception(Exception.CANNOT_UPDATE_PRODUCT);
    }
};

const remove = async (id) => {
    const product = await ProductModel.deleteOne({ _id: id });
    return product;
};

export default {
    getAll,
    getById,
    create,
    update,
    remove,
};
