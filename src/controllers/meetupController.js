import Meetup from '../models/meetup.js';

export const createMeetup = async (req, res) => {
  try {
    const { title, date, location } = req.body;
    const newMeetup = new Meetup({
      title,
      date,
      location,
    });

    await newMeetup.save();
    res.status(201).json(newMeetup);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Bład tworzenia meetupu' });
  }
};

export const getMeetups = async (req, res) => {
  try{
    const meetups = await Meetup.find();
    res.status(200).json(meetups);
  }
  catch(err){
    console.log(err)
    res.status(500).json({message:'Bład przy pobieraniu meetupów'})
  }
}