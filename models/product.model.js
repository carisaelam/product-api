const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter product name'],
    },
    quantity: {
      type: Number,
      required: [true, 'Please enter quantity'],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'Please enter price'],
      default: 0,
    },
    image: {
      type: String,
      required: false,
      default: 'https://picsum.photos/200',
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
