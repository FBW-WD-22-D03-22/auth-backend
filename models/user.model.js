import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export default mongoose.model('User', userSchema);
