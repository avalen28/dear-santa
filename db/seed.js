const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const Present = require("../models/Present");
const data = require("./data");

const MONGO_URL = "mongodb://localhost:27017/dear-santa";

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("conected with Mongo"))
  .then(() => Present.deleteMany())
  .then(() => Present.create(data))
  .then(() => console.log("data created"))
  .catch((err) => console.log(err))
  .finally(() => mongoose.disconnect());
