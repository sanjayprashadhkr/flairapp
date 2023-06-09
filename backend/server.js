//STEP 1: node init in backend folder to create the dependency file

//STEP 2: Create app.js file in the backend folder

//STEP 3: npm install express

//STEP 4:npm install nodemon

//STEP 5:npm install mongodb

//npm install dotenv

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = express.Router();
require("dotenv").config();
const usermodel = require("./models/usermodel");
const bodyParser = require("body-parser");

//Middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", async (req, res) => {
  try {
    const users = await usermodel.find({});
    // res.json({ Greetings: "Hello user!!!" });
    // res
    //   .status(200)
    //   .header("Content-Type", "application/json")
    //   .send(users + "HELLLLOOOO");

    res.status(200).json("HELLLLOOO");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

//Sign In API

app.post("/signin", async (req, res) => {
  const { emailId, password } = req.body;
  //Check whether the email exists in the DB.If no , throw an error saying "User does not exist"
  try {
    const user = await usermodel.find({ emailId: emailId });
    if (user.length === 0) console.log("User does not exist");
    console.log(user[0].password);
    if (user[0].password === password) {
      user[0].password = null;
      res.status(200).send(user[0]);
    }
  } catch (error) {}
  //If yes check whether the password in the DB is same as the password entered by the user
  // console.log(req.body);
});

//Registartion API
app.get("/signup", async (req, res) => {
  const emailId = String(req.query.email);
  console.log(emailId);
  const user = await usermodel.find({ emailId: emailId });
  if (user.length === 0) {
    try {
      const newuser = new usermodel({
        emailId: emailId,
        orderHistory: [],
        myCart: [],
        totalCartItems: 0,
      });
      const result = await newuser.save();
      res.status(201).json(result);
    } catch (error) {
      res.send(error);
    }
  } else {
    res.send(user[0]);
  }
});

//Update the cart
app.post("/updatecart", async (req, res) => {
  // Update user's cart
  const { emailId, productid, quantity, price } = req.body;
  //Retieve the user Id using the email ID
  const user = await usermodel.findOne({ emailId: emailId });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  user.myCart.push({
    productid: productid,
    quantity: quantity,
    price: price,
  });
  user.totalCartItems += quantity;
  user.save();

  res.status(200).json("Cart updated successfully");
});

app.delete("/deletecartitem", async (req, res) => {
  const { emailId, productid } = req.body;

  console.log("DELETE IS GETTING CALLED");

  const user = await usermodel.findOne({ emailId: emailId });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const cartItem = user.myCart.find((item) => {
    return item.productid === productid;
  });
  console.log(cartItem);
  let quantity = cartItem.quantity;
  user
    .updateOne({ $pull: { myCart: { productid: productid } } })
    .exec()
    .then((result) => {
      console.log(result);
      user.totalCartItems -= quantity;
      user.save();
      return res.status(200).json({ message: "ITEM DELETED SUCCESSFULLY" });
    })
    .catch((err) => {
      console.error(err);
    });
});

//Connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB and Listening on Port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
