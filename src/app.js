const express = require("express");
const app = express();

const ENV_VARIABLES = require("./config/env");
const { connectDB } = require("./config/db");
const authRoutes = require("./routes/auth.route");

const PORT = ENV_VARIABLES.PORT || 5000;
//middlewares
app.use(express.json());

//route mouting
app.use("/api/auth", authRoutes);

//server and db connection
app.listen(PORT, () => {
  connectDB();

  console.log(`Server is listening at port ${PORT}`);
});
