import mongoose from 'mongoose';

const meetSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String },
});

export default mongoose.model('Meetup', meetSchema);
