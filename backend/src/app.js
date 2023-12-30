const express = require('express');
const cors = require('cors');
const usersRoutes = require('./routes/users');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', usersRoutes);

module.exports = app;