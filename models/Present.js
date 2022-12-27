const mongoose = require("mongoose");
const { Schema } = mongoose;

const presentSchema = new Schema({
  name: String,
  image: {
    type: String,
    default:
      "https://iheartcraftythings.com/wp-content/uploads/2021/05/Present-DRAWING-%E2%80%93-STEP-10.jpg",
  },
  price: {
    type: Number,
    required: true,
  },
  recipient: {
    type: String,
    required: true,
  },
  description: String,
});

const Present = mongoose.model("Present", presentSchema);
module.exports = Present;
