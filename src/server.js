import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import router from './user.router.js';
import dbConnection from './dbConnection.js';

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

app.use(cors())
app.use(express.json());
app.use('/api/v1/users', router);

const startServer = async () => {
  try {
    await dbConnection(MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer()