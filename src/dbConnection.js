import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

const dbConnection = async (uri) => {
  return mongoose.connect(uri);
};

export default dbConnection;
