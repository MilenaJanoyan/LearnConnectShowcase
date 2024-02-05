import {Router} from 'express';
import userController from '../controllers/user-controller.js';
import authMiddleware from '../middlewares/auth-middleware.js';
import { registerValidation } from "../validations/auth.js";
import postController from "../controllers/post-controller.js";

const router = Router();

router.post('/registration',
    registerValidation,
    userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

router.post('/post',authMiddleware, postController.create)
router.get('/post', postController.getAll)
router.get('/post/popular/:count', postController.getPopularPosts)
router.get('/post/:postId', postController.getOne)
router.delete('/post/:postId',authMiddleware, postController.delete)
router.put('/post/:id',authMiddleware, postController.update)
router.put('/addComment/:id',authMiddleware, postController.addComment)

router.get('/me',authMiddleware, userController.getUser)
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);

export default router;