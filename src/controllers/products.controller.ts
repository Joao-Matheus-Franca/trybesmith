import { Request, Response } from 'express';
import newProduct from '../services/products.service';

const sendNewProduct = async (req: Request, res: Response) => {
  const { body: { name, amount } } = req;
  const result = await newProduct({ name, amount });
  
  return res.status(201).json({ id: result.insertId, name, amount });
};

export default sendNewProduct;