import express from 'express';
const router = express.Router();
import {
  getAllUsers,
  getSingleUser,
  createSingleUser,
  updateSingleUser,
  deleteSingleUser,
} from '../controllers/user.controller.js';

router.route('/').get(getAllUsers).post(createSingleUser);
router
  .route('/:id')
  .get(getSingleUser)
  .put(updateSingleUser)
  .delete(deleteSingleUser);

export default router;
