import { print, OutputType } from '../helpers/print.js';
export default class Exception extends Error {
    static WRONG_DB_USERNAME_PASSWORD = 'Wrong database username and password';
    static WRONG_SERVER_NAME = 'Wrong server name/connection string';
    static CANNOT_CONNECT_MONGODB = 'Cannot connect to MongoDB';
    static ERROR_EXIST = 'User already exists';
    static ERROR_EXIST_USER = 'user does not exist';
    static ERROR_EXIST_USER_ID = 'user Id does not exist';
    static CANNOT_REGISTER_USER = 'Cannot register user';

    static ERROR_EXIST_PRODUCT = 'product does not exist';
    static CANNOT_PRODUCT = 'Cannot create new product';
    static CANNOT_UPDATE_PRODUCT = 'Cannot update product';
    static CANNOT_PRICE = 'Cannot room Price';
    static CANNOT_NOT_ID = 'Cannot not Id';
    static WRONG_USERNAME_PASSWORD = 'Wrong username and password';
    static TOKEN_NOT_CORRECT = 'Token is not correct';
    static WRONG_TOKEN = 'Wrong token';

    constructor(message, validationError = {}) {
        super(message);
        print(message, OutputType.ERROR);
        this.validationError = validationError;
    }
}
