const Hotel = require("../model/hotels");
const Booking = require("../model/booking");

exports.getHotel = (req, res) => {
  const date = Date.parse(req.body.date);
  const bookedHotels = [];
  Booking.find({ date: date })
    .then((booking) => {
      booking.forEach((element) => {
        bookedHotels.push(element.hotelId);
      });
      const response = [];
      Hotel.find()
        .then((hotels) => {
          hotels.forEach((elements) => {
            if (!bookedHotels.includes(elements.hotelId))
              response.push(elements);
          });
          res.status(200).json(response);
        })
        .catch((error) => {
          res.status(404).json(error);
        });
    })
    .catch((error) => {
      res.status(404).json(error);
    });
};

exports.getBookedHotel = (req, res) => {
  Booking.find({ userId: req.body.userId })
    .then((booking) => {
      res.status(200).json(booking);
    })
    .catch((error) => {
      res.status(404).json(error);
    });
};

exports.bookHotel = (req, res) => {
  const date = Date.parse(req.body.date);
  const newBooking = Booking({
    userId: req.body.userId,
    hotelId: req.body.hotelId,
    date: date,
  });
  newBooking
    .save()
    .then((user) => {
      res.status(200).json({ status: "Booked" });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
