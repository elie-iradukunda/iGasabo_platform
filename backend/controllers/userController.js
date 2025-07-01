// controllers/userController.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser, findUserByPhone } from '../models/userModel.js';

export async function register(req, res) {
  const { name, phone, password, role_id, location_id } = req.body;

  try {
    const existing = await findUserByPhone(phone);
    if (existing) return res.status(400).json({ message: 'Phone already in use' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser({ name, phone, hashedPassword, role_id, location_id });

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}

export async function login(req, res) {
  const { phone, password } = req.body;

  try {
    const user = await findUserByPhone(phone);
    if (!user) return res.status(401).json({ message: 'Invalid phone or password' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid phone or password' });

    const token = jwt.sign({ userId: user.user_id, role: user.role_id }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });

    res.json({ token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}
