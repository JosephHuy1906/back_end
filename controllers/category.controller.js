import httpStatusCode from '../exceptions/httpStatusCode.js';
import { categoryRepository } from '../repositories/index.js';

const getAll = async (req, res) => {
    try {
        const category = await categoryRepository.getAll();
        res.status(httpStatusCode.OK).json({
            status: 200,
            message: 'get category successfuly',
            data: category,
        });
    } catch (error) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: error.toString(),
        });
    }
};

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = categoryRepository.getById(id);

        if (!data) {
            res.status(400).json({
                status: 400,
                message: 'Input exists',
            });
        }
    } catch (errors) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: errors.toString(),
        });
    }
};

const create = async (req, res, next) => {
    try {
        const { name } = req.body;
        await categoryRepository.create({ name });

        res.status(httpStatusCode.INSERT_OK).json({
            status: 201,
            message: 'create category successfuly',
        });
    } catch (errors) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: errors.toString(),
        });
    }
};
export default {
    getAll,
    getById,
    create,
};
