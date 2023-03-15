const mongoose = require("mongoose");
const BookingSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "Please provide a user!"],
  },
  hotelId: {
    type: String,
    required: [true, "Please provide a hotel!"],
  },
  date: {
    type: Date,
    required: [true, "Please provide a date!"],
  },
});
module.exports = mongoose.model.Booking || mongoose.model("Booking", BookingSchema);
