const express = require('express');
const cors = require('cors');
const productsRoutes = require('./routes/products');
const loginRoutes = require('./routes/login');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/login', loginRoutes);
app.use('/products', productsRoutes);

module.exports = app;