import express from 'express';
import {
  createMeetup,
  getMeetups,
  getMeetupByID,
} from '../controllers/meetupController.js';

const router = express.Router();
router.get('/', getMeetups);
router.get('/:id', getMeetupByID);
router.post('/', createMeetup);

export default router;
