import express from 'express';
import meetupRouter from './routes/meetupRouter.js';
import userRouter from './routes/userRouter.js';
import mongoose from 'mongoose';

const MONGO_URL = 'mongodb://localhost:27017/gatherly';

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello from Gatherly backend!');
});

app.use('/api/users', userRouter);
app.use('/api/meetups', meetupRouter);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log('Połaczono MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on server ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('Błąd z połaczeniem MongoDB', err);
  });
