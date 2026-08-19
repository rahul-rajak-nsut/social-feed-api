const express = require('express');
const { createPost, getPostById, deletePost } = require('../controllers/postController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createPost);
router.get('/:id', getPostById);
router.delete('/:id', protect, deletePost);

module.exports = router;
