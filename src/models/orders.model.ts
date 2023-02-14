import connection from './connection';

const findAllOrders = () => connection.execute(`
SELECT o.id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds FROM Trybesmith.orders as o
INNER JOIN Trybesmith.products as p
WHERE o.id = p.order_id
GROUP BY id;
`);

export default findAllOrders;