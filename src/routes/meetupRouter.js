import express from 'express';
import { createTestMeetup } from '../controllers/meetupController.js';

const router = express.Router();

router.post('/test', createTestMeetup);

export default router;
