import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import User from './models/User';
import Post from './models/Post';

require('dotenv').config();
require('babel-core/register');
require('babel-polyfill');

// Import Environment Variables and Mongoose Models

const app = express();

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: '20mb'
  })
);

// Connect to MLab Database
mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
  )
  .then(() => console.log('DB connected'))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'Welcome to ass API!'
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on localhost:${PORT}`);
});
