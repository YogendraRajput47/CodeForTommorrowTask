const dotenv = require("dotenv");
dotenv.config();

const ENV_VARIABLES = {
  PORT: process.env.PORT || 3000,
  MONGO_URL: process.env.MONGO_URL
};

module.exports = ENV_VARIABLES;