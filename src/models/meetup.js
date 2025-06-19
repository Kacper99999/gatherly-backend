import mongoose from 'mongoose';

const meetSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true,'Tytuł jest wymagany'] ,
    trim: true, 
    minlength: [3,'Tytuł mui miec co najmniej 3 znaki'],
    maxlength:[100,'Tyuł nie może miec wiecej niż 100 znaków'] 
  },
  date: {
    type: Date,
    required: [true,'Data jest wymagana'], 
    validate:{
    validator:(value) => value > new Date(),
    message:'Data musi być przyszłosciowa'
  } },
  description: { 
    type: String, 
    trim: true, 
    maxlength:[500,'Opis nie może miec wiecej niż 500 znaków'] 
  },
  location: { 
    type: String, 
    trim:true,
    defaul: '' 
  },
});

export default mongoose.model('Meetup', meetSchema);
