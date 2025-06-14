import express from 'express';
import { getAllMeetups } from '../controllers/meetupController.js';

const router = express.Router();

router.get('/', getAllMeetups);

export default router;
