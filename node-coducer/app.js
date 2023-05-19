const dotnev = require('dotenv');
dotnev.config();

const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');

const app = express();
app.use(cors());

const userRoutes = require('./routes/user');


app.use(express.json());

app.use('/user', userRoutes);


mongoose
  .connect(
    process.env.DB_DETAILS
  )
  .then(() => {
    app.listen(process.env.DB_PORT);
  })
  .catch(error => {
    console.log(error)
  })

