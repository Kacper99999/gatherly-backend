import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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

export const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(400).json({ message: 'Nieprawydłowy e-mail lub hasło' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.status(200).json({
      message: 'Poprawne logowanie',
      token,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
