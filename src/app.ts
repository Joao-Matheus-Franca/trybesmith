import express from 'express';
import sendNewProduct from './controllers/products.controller';

const app = express();

app.use(express.json());

app.post('/products', sendNewProduct);

export default app;

// João Matheus Silva Franca