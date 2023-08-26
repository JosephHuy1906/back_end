import Exception from '../exceptions/Exception.js';
import categorySchema from '../models/schemas/Category.schema.js'



const getAll = async () => {
    const category = await categorySchema.find();
    return category;
};

const getById = async (id) => {
    const category = await categorySchema.findById(id);
    return category;
};
const create = async ({categoryId,name}) => {
    try {
        const newProduct = await categorySchema.create({
            categoryId,
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
        const existing = await categorySchema.findById(id).exec();
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
    const product = await ProductModel.deleteOne({ categoryId: id });
    return product;
};

export default {
    getAll,
    getById,
    create,
    update,
    remove,
};
