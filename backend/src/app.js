const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', usersRouter);
app.use('/products', productsRouter);

module.exports = app;