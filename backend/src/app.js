const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const loginRouter = require('./routes/login');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

module.exports = app;