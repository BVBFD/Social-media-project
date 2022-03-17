import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import postRoute from './routes/posts.js';
import multer from 'multer';
import cors from 'cors';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('common'));

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req.body);
    console.log(file);
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    return res.status(200).json('File uploded successfully');
  } catch (error) {
    console.error(error);
  }
});

app.get('/lee', (req, res, next) => {
  res.send('Hello my friends');
});

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);

mongoose.connect(process.env.MONGO_URL, () => {
  console.log('Connected to MongoDB');
});

app.listen(8800, () => {
  console.log('Backend server is running!');
});
