import express from 'express';
import showAllOrders from './controllers/orders.controller';
import { sendNewProduct, showAllProducts } from './controllers/products.controller';
import sendNewUser from './controllers/users.controller';

const app = express();

app.use(express.json());

app.get('/products', showAllProducts);

app.post('/products', sendNewProduct);

app.post('/users', sendNewUser);

app.get('/orders', showAllOrders);

export default app;

// João Matheus Silva Franca