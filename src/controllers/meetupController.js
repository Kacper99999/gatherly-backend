import mongoose from 'mongoose';
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
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: err.message });
    }
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

export const getMeetupByID = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Nieprawidłowe ID meetupu' });
  }
  try {
    const meetup = await Meetup.findById(id);
    if (!meetup) {
      res.status(404).json({ message: 'Meetup nie został znaleziony' });
    }
    res.status(200).json({ meetup });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateMeetup = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Nieprawidłowe ID meetupu' });
  }
  try {
    const updatedMeetup = await Meetup.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedMeetup) {
      res.status(404).json({ message: 'Meetup nie został znaleziony' });
    }
    res.status(200).json({ updatedMeetup });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: err.message });
    }
    res.status(500).json({ message: err.message });
  }
};

export const delateMeetup = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Nieprawidłowe ID meetupu' });
  }
  try {
    const delatedMeetup = await Meetup.findByIdAndDelete(id);
    if (!delatedMeetup) {
      res.status(404).json({ message: 'Meetup nie został znaleziony' });
    }
    res.status(200).json({ message: 'Pomyslanie usunieto meetup' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
