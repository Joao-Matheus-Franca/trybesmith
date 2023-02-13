import express from 'express';
import { sendNewProduct, showAllProducts } from './controllers/products.controller';
import sendNewUser from './controllers/users.controller';

const app = express();

app.use(express.json());

app.get('/products', showAllProducts);

app.post('/products', sendNewProduct);

app.post('/users', sendNewUser);

export default app;

// João Matheus Silva Franca