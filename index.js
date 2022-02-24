const express = require("express");
var cors = require('cors')
// create express app
const app = express();

app.use(cors())

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const productRoute = require("./routes/phone");

// connect to mongodb
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected!"))
  .catch((error) => console.log(error));

  // Middleware
app.use(express.json());

app.use("/api/phone", productRoute);

// listen to server
app.listen(process.env.PORT || 5000, () => {
  console.log("backend is running!");
});
