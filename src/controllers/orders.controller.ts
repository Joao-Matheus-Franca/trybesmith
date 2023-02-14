import { Request, Response } from 'express';
import allOrders from '../services/orders.service';

const showAllOrders = async (_req: Request, res: Response) => {
  const result = await allOrders();

  return res.status(200).json(result);
};

export default showAllOrders;