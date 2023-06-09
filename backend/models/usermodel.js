const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    emailId: {
      type: String,
      required: true,
      unique: true,
    },
    orderHistory: [
      {
        type: Number,
        required: true,
      },
    ],
    myCart: [
      {
        productid: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    totalCartItems: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema, "Users");

module.exports = User;
