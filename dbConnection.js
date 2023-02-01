import mongoose from 'mongoose';

const dbConnection = async (url) => {
  try {
    await mongoose.connect(url);
  } catch (e) {
    console.error(e);
  }
};

export default dbConnection;
