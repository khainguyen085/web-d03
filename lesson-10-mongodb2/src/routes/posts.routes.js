import express from 'express';

import { createPost, getPosts, getPostById, deletePost, updatePost } from '../controllers/posts.controllers.js'

const router = express.Router();

router.get('/', getPosts);

router.post('/',createPost);

router.get('/:id',getPostById);

router.delete('/:id',deletePost);

router.patch('/:id',updatePost);

export default router;