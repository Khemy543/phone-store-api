const express = require("express");
// create express app
const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const productRoute = require("./routes/phones");

// connect to mongodb
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected!"))
  .catch((error) => console.log(error));

app.use("/api", productRoute);

// listen to server
app.listen(process.env.PORT || 5000, () => {
  console.log("backend is running!");
});
