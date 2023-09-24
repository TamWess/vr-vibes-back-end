const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  accessTokenSecret: process.env.ADMIN_PASSWORD,
  adminEmail: process.env.ADMIN_EMAIL,
  adminPassword: process.env.ADMIN_PASSWORD,
  mongoDBUrl: process.env.URLDB,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
};
