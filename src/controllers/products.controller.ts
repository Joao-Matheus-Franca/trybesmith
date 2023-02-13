import { Request, Response } from 'express';
import { newProduct, allProducts } from '../services/products.service';

export const showAllProducts = async (_req: Request, res: Response) => {
  const result = await allProducts();

  return res.status(200).json(result);
};

export const sendNewProduct = async (req: Request, res: Response) => {
  const { body: { name, amount } } = req;
  const result = await newProduct({ name, amount });
  
  return res.status(201).json({ id: result.insertId, name, amount });
};