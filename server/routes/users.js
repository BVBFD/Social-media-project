import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send("Hey It's user route");
});

export default router;
