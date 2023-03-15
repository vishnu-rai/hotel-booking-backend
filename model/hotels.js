const mongoose = require("mongoose");
const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name!"],
  },
  address: {
    type: String,
    required: [true, "Please provide a address!"],
  },
  hotelId: {
    type: String,
    required: [true, "Please provide a hotel Id!"],
  },
});
module.exports = mongoose.model.Hotels || mongoose.model("Hotels", HotelSchema);
