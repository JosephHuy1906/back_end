import express from 'express';
const router = express.Router();
import { userController } from '../controllers/index.js';

router.get('/', userController.getAll);
router.post('/login', userController.login);
router.post('/signup', userController.register);

router.put('/updateuser/', userController.updateUser);
router.get('/useradmin');
router.get('/id/:id');
router.get('/email/:id');
router.get('/get/role');
router.get('/codecheck/:id');
router.post('/createadmin');
router.post('/loginAd');
router.get('/loginad/:token');
router.get('/profile/:token');
router.put('/update/role/:id');
router.put('/update/pass/:id');


export default router;
