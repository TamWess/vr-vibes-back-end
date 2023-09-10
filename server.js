const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = 3001;
const mongoose = require("mongoose");

connectDB = process.env.URLDB;

const connectionToDataBase = async () => {
  try {
    await mongoose.connect(process.env.URLDB);
    console.log("Successfully connected to database");
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

connectionToDataBase();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/post.routes"));

app.listen(port, () => console.log("le serveur est lancé au port" + port));
