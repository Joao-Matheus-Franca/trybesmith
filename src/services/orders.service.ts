import findAllOrders from '../models/orders.model';

const allOrders = async () => {
  const [result] = await findAllOrders();
  return result;
};

export default allOrders;