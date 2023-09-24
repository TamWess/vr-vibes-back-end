const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config.js");

const connectionToDataBase = async () => {
  try {
    await mongoose.connect(config.mongoDBUrl);
    console.log("Successfully connected to database");
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

start();

async function start() {
  const app = express();

  app.use(cors());

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(require("./routes/routes.js"));

  await connectionToDataBase();

  app.listen(process.env.PORT, () =>
    console.log(`le serveur est lancé au port ${process.env.port}`)
  );
}
