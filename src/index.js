import express from 'express';
import meetupRouter from './routes/meetupRouter.js';

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('/api/meetups', meetupRouter);

app.get('/', (_req, res) => {
  res.send('Hello from Gatherly backend!');
});

app.listen(PORT, () => {
  console.log(`Server running on server ${PORT}`);
});
