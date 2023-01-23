import express from 'express';
const router = express.Router();

import { getUser, addUser, updateUser, deleteUser } from './user.controller.js';

router.route('/').post(addUser);
router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

export default router;
