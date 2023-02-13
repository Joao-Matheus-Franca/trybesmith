import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const insertNewProduct = (product: { name: string, amount: string }) => 
  connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount)
    VALUES (?, ?)
  `, [product.name, product.amount]); 

export default insertNewProduct;