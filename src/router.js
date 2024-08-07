import { Router } from 'express';
import { v4 } from 'uuid';
import User from './app/models/user.js';

const routes = new Router();

routes.get('/home', async (req, res) => {
  const user = await User.create({
    id: v4(),
    name: 'foi',
    email: ' era',
    password_hash: 'paulo',
  });
  return res.status(201).json(user);
});

export default routes;


