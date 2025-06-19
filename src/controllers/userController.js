import User from '../models/user.js';
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(409).json({ message: 'Użytkownik już istnieje' });
    }

    const hashedPassowrd = await bcrypt.hash(password, 10);

    const newUser = new User({
      email: email.toLowerCase(),
      username,
      password: hashedPassowrd,
    });
    await newUser.save();
    res
      .status(201)
      .json({ message: 'Użytkownik został zarejestrowany pomyślnie' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
