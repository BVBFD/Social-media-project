import express from 'express';
import Post from '../models/Post.js';

const router = express.Router();

// create a post
router.post('/', async (req, res, next) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});
// update a post
router.put('/:id', async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json('The post has been updated');
    } else {
      res.status(403).json('You can update only your post');
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
// delete a post
router.delete('/:id', async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(204).json('The post has been deleted');
    } else {
      res.status(403).json('You can delete only your post');
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
// like a post
// get timeline posts

export default router;
