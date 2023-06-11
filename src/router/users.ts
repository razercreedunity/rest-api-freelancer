import express from 'express';

import { insertUser, getAllUsers, deleteUser, updateUser } from '../controllers/users';

export default (router: express.Router) => {
  router.post('/post', insertUser);
  router.get('/getAll', getAllUsers);
  router.delete('/delete/:id', deleteUser);
  router.patch('/update/:id', updateUser);
};
