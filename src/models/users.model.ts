import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const insertNewUser = (user: {
  username: string,
  vocation: string,
  level: number,
  password: string
}) => 
  connection.execute<ResultSetHeader>(`INSERT INTO Trybesmith.users 
  (username, vocation, level, password)
  VALUES (?, ?, ?, ?)
  `, [user.username, user.vocation, user.level, user.password]);

export default insertNewUser;