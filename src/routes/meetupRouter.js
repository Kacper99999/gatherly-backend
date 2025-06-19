import express from 'express';
import {
  createMeetup,
  getMeetups,
  getMeetupByID,
  updateMeetup,
  delateMeetup,
} from '../controllers/meetupController.js';

const router = express.Router();
router.get('/', getMeetups);
router.get('/:id', getMeetupByID);
router.post('/', createMeetup);
router.put('/:id', updateMeetup);
router.delete('/:id', delateMeetup);

export default router;
