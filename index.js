const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const productRoute = require('./routes/product.route.js');

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log(`Running on port 3000`);
});

// ROUTES
app.use('/api/products', productRoute);

// Root
app.get('/', (req, res) => {
  res.send('Hello from Node API 👋');
});

// Connect to database
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected!'))
  .catch((err) => console.log(err));
