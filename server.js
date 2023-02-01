import express from 'express';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnection from './dbConnection.js';

// "call the imports"

dotenv.config();
const app = express();

// environment variables
const PORT = process.env.PORT || 5000;
const mongoUrl = process.env.MONGO_URL;

// middleware

app.use(cors());
app.use(express.json());

// routes

app.use('/api/users', userRoutes);

// start server

const startServer = async () => {
  try {
    await dbConnection(mongoUrl);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (e) {
    console.error(e);
  }
};

startServer();
