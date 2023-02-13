import insertNewProduct from '../models/products.model';

const newProduct = async (product: { name: string, amount: string }) => {
  const [result] = await insertNewProduct(product);
  return result;
};

export default newProduct;