import { insertNewProduct, findAllProducts } from '../models/products.model';

export const allProducts = async () => {
  const [result] = await findAllProducts();
  return result;
};

export const newProduct = async (product: { name: string, amount: string }) => {
  const [result] = await insertNewProduct(product);
  return result;
};