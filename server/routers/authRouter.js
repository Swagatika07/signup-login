import express from 'express';
import {login, logout, register} from '../controllers/authController.js';

const authRouter = express.Router();
//Defining the api endpoints here
authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.get('/logout', logout);

export default authRouter;