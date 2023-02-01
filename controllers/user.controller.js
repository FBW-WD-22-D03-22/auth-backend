import User from '../models/user.model.js';

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await User.findById(id);
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createSingleUser = async (req, res) => {
  try {
    const user = req.body;
    const newUser = await User.create(user);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const udpatedUser = await User.findByIdAndUpdate(id, user, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(udpatedUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deleteSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export {
  getAllUsers,
  getSingleUser,
  createSingleUser,
  updateSingleUser,
  deleteSingleUser,
};
