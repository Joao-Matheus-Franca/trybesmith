import express from 'express';
import { sendNewProduct, showAllProducts } from './controllers/products.controller';

const app = express();

app.use(express.json());

app.get('/products', showAllProducts);

app.post('/products', sendNewProduct);

export default app;

// João Matheus Silva Franca