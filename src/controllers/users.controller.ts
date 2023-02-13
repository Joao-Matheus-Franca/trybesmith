import { Request, Response } from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import newUser from '../services/users.service';

dotenv.config();

const secretKey = process.env.JWT_SECRET || 'minhaSenha';

const jwtConfig = {
  expiresIn: '7d',
};

const sendNewUser = async (req: Request, res: Response) => {
  const { body: { username, vocation, level, password } } = req;
  const result = await newUser({ username, vocation, level, password });
  if (result.affectedRows === 1) {
    const token = jwt.sign({ data: { username } }, secretKey, jwtConfig);
    return res.status(201).json({ token });
  }
};

export default sendNewUser;