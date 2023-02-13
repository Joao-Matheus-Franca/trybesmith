import { ResultSetHeader } from 'mysql2';
import connection from './connection';

export const findAllProducts = () => connection.execute('SELECT * FROM Trybesmith.products');

export const insertNewProduct = (product: { name: string, amount: string }) => 
  connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name, amount)
    VALUES (?, ?)
  `, [product.name, product.amount]); 