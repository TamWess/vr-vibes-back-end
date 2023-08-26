const express = require("express");
const connectDB = require("./config.db");
const dotenv = require("dotenv").config();
const port = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

app.listen(port, () => console.log("le serveur est lancé au port" + port));
