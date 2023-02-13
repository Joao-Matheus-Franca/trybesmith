import insertNewUser from '../models/users.model';

const newUser = async (user: {
  username: string,
  vocation: string,
  level: number,
  password: string
}) => {
  const [result] = await insertNewUser(user);
  return result;
};

export default newUser;