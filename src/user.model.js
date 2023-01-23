import mongoose from 'mongoose';

// email validator
const isEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter a name'],
    trim: true,
    minlength: [3, 'Name must be at least 3 characters long'],
    maxlength: [50, 'Name must be less than 50 characters long'],
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    trim: true,
    lowercase: true,
    minlength: [3, 'Email must be at least 3 characters long'],
    maxlength: [50, 'Email must be less than 50 characters long'],
    validate: [isEmail, 'Please enter a valid email'],
  },
});

const User = mongoose.model('User', userSchema);

export default User;
