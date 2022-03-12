import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import postRoute from './routes/posts.js';

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL, () => {
  console.log('Connected to MongoDB');
});

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.get('/lee', (req, res, next) => {
  res.send('Hello my friends');
});

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);

app.listen(8800, () => {
  console.log('Backend server is running!');
});
