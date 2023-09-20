const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
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

start();

async function start() {
	const app = express();

	app.use(cors());

	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));

	app.use("/", require("./routes/post.routes"));

	await connectionToDataBase();

	app.listen(process.env.port, () =>
		console.log(`le serveur est lancé au port ${process.env.port}`)
	);
}
