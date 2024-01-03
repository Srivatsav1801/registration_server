const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
//use express.json() to get data into json format
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Port
const PORT = process.env.PORT || 5500;

//use cors
app.use(cors());

//import routes
const register = require("./routes/redg");

//connect to mongodb ..
mongoose
  .connect("mongodb://localhost:27017/logins", { useNewUrlParser: true })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use("", register);

//connect to server
app.listen(PORT, () => console.log("Server connected"));
