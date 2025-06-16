import mongoose from 'mongoose';

const meetSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, minlength: 3 },
  date: { type: Date, required: true },
  description: { type: String, trim: true },
  location: { type: String, defaul: '' },
});

export default mongoose.model('Meetup', meetSchema);
