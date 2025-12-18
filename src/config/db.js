const mongoose = require("mongoose");

const ENV_VARIABLES = require("./env");


exports.connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV_VARIABLES.MONGO_URL);
    console.log("DB Connected Successfully: ", conn.connection.host);
  } catch (error) {
    console.error("DB connection failed", error.message);
    process.exit(1);
  }
};
