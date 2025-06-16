import Meetup from '../models/meetup.js';

export const createMeetup = async (req, res) => {
  try {
    const { title, date, description, location } = req.body;
    const newMeetup = new Meetup({
      title,
      date,
      description,
      location,
    });

    await newMeetup.save();
    res.status(201).json(newMeetup);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMeetups = async (_req, res) => {
  try {
    const meetups = await Meetup.find();
    res.status(200).json(meetups);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
