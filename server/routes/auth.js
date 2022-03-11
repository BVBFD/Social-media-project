import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Register
router.get('/register', async (req, res, next) => {
  const user = await new User({
    username: 'Lee Seong Eun',
    email: 'lsevina126@gmail.com',
    password: '123456',
  });

  await user.save();
  res.send('OK!');
});

export default router;
