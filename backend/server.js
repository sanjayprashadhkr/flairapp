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

// //Get all workouts
// const getAllWorkout = async (req, res) => {
//   const workouts = await WorkoutModel.find({}).sort({ createdAt: -1 });
//   res.status(200).json(workouts);
// };

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
    //console.log(users);
    // res.json({ Greetings: "Hello user!!!" });
    res.status(200).header("Content-Type", "application/json").send(users);
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

  // try {
  //   const { userId, firstName, password, lastName, phoneNumber, emailId } =
  //     req.body;
  //   const user = new usermodel({
  //     emailId,
  //     orderHistory: [],
  //     myCart: [],
  //     totalCartItems: 0,
  //   });
  //   const result = await user.save();
  //   res.status(201).json(result);
  // } catch (error) {
  //   res.status(400).json({ message: error.message });
  // }
});

//Update the cart
app.post("/updatecart", async (req, res) => {
  // console.log("UPDATE CART ");
  // console.log(req.body);

  // Update user's cart
  const { emailId, productid, quantity } = req.body;

  console.log(emailId);
  console.log(productid);
  console.log(quantity);

  //Retieve the user Id using the email ID
  const user = await usermodel.findOne({ emailId: emailId });
  //const user = await usermodel.findById("6411511f7176c2964d6be7e4");
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  user.myCart.push({
    productid: productid,
    quantity: quantity,
  });
  user.totalCartItems += quantity;
  user.save();
  // user.myCart.push(req.body);
  // console.log(user);
  //user.cartLength = user.myCart.length;
  // await user.updateOne({ $set: { myCart: user.myCart } });

  res.status(200).json("Cart updated successfully");
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

// const run = async () => {
//   const user = new usermodel({ emailId: "sanjaysskr1r908@yopmail.com" });
//   await user.save();
//   console.log(user);
// };
// run();
