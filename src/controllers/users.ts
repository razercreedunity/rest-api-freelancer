import express from 'express';

import { deleteUserById, getUsers, updateUserById } from '../db/users';
import { getUserByEmail, createUser, getUserByEmailExisting } from '../db/users';

export const insertUser = async (req: express.Request, res: express.Response) => {
  try {
    const { username, email, phone_number, skillsets, hobby } = req.body;

    if (!username || !email || !phone_number || !skillsets || !hobby) {
      return res.sendStatus(400);
    }

    const existingUser = await getUserByEmail(email);
  
    if (existingUser) {
      return res.sendStatus(400);
    }

    const user = await createUser({
      username,
      email,
      phone_number,
      skillsets,
      hobby,
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const getAllUsers = async (req: express.Request, res: express.Response) => {
  try {
    const users = await getUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteUserById(id);

    return res.json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const updateUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { username, email, phone_number, skillsets, hobby } = req.body;

    if (!username || !email || !phone_number || !skillsets || !hobby) {
      return res.sendStatus(400);
    }

    const existingUser = await getUserByEmailExisting(id, email);
  
    if (existingUser) {
      return res.sendStatus(400);
    }
    
    const updatedUser = await updateUserById(id, {
    username,
    email,
    phone_number,
    skillsets,
    hobby,
    });

    return res.status(200).json(updatedUser).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}