import express from 'express';
import { createMeetup, getMeetups } from '../controllers/meetupController.js';

const router = express.Router();
router.get('/',getMeetups);
router.post('/', createMeetup);


export default router;
