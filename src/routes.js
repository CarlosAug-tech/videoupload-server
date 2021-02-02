import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

import FileController from './app/controllers/FileController';
import VideoController from './app/controllers/VideoController';
import CommentController from './app/controllers/CommentController';
import NotificationController from './app/controllers/NotificationController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get('/videos', VideoController.index);
routes.get('/videos/:id', VideoController.show);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/myvideos', VideoController.showVideosUser);
routes.post('/videos', VideoController.store);
routes.put('/videos/:id', VideoController.update);

routes.post('/comments/:id', CommentController.store);

routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
