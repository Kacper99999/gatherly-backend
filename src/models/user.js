import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email jest wymagany'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, 'Nieprawidłowy emial'],
    },
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: [3, 'Username nie może być krótszy niż 3 znaki'],
      maxlength: [20, 'Username nie może być dłuższy niż 20 znaków'],
      trim: true,
      match: [
        /^[a-zA-Z0-9_-]+$/,
        'Username może zawierać tylko litery, cyfry, myślniki i podkreślenia',
      ],
    },
    password: {
      type: String,
      required: [true, 'Hasło jest wymagane'],
      minlength: [6, 'Hasło musi mieć co najmniej 6 znaków'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
