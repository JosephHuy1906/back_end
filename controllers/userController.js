import { body, validationResult } from 'express-validator';
import httpStatusCode from '../exceptions/httpStatusCode.js';
import { userRepositori } from '../repositories/index.js';
import { Usermodel } from '../models/index.js';
import Exception from '../exceptions/Exception.js';

const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(httpStatusCode.BAD_REQUEST).json({ errors: errors.array() });
    }
    const { username, password } = req.body;
    try {
        let existUser = await userRepositori.login({ username, password });
        res.status(httpStatusCode.OK).json({
            message: 'Login successfully',
            data: existUser,
        });
    } catch (err) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: err.toString(),
        });
    }
};

const getAll = async (req, res) => {
    const data = await Usermodel.find();
    res.status(httpStatusCode.OK).json({
        message: 'get data successfully',
        data: data,
    });
};

const getDetail = async (req, res) => {
    let id = req.params.id;
    try {
        const us = await userRepositori.getDetail(id);
        res.status(httpStatusCode.OK).json({
            message: 'get data successfully',
            data: us,
        });
    } catch (err) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: err.toString(),
        });
    }
};

const register = async (req, res) => {
    const { email,fullName,  password} = req.body;
    try {
        const data = await userRepositori.register({
            email,
            fullName,
            password,
        });
        res.status(httpStatusCode.INSERT_OK).json({
            message: 'Register successfuly',
            data: data,
        });
    } catch (err) {
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
            message: err.toString(),
        });
    }
};
const partToken = async (req, res) => {
    try {
        const token = req.params.id;
        const data = await userRepositori.partToken(token);
        res.status(httpStatusCode.OK).json({ data: data });
    } catch (err) {
        res.status(httpStatusCode.BAD_REQUEST).json({ message: err.toString() });
    }
};
const updateUser = async (req, res) => {
    const { username, fullName, nameBank, numberBank } = req.body;
    try {
        const roomId = await userRepositori.updateUser(req.body);

        res.status(httpStatusCode.INSERT_OK).json({
            message: 'Update user successfuly',
        });
    } catch (err) {
        res.status(httpStatusCode.BAD_REQUEST).json({
            message: err.toString(),
        });
    }
};
export default {
    login,
    register,
    getAll,
    getDetail,
    partToken,
    updateUser,
};
