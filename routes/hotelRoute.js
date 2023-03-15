const express = require('express');
const router = express.Router();

const controller = require('../controllers/hotelController')

router.get('/getHotel', controller.getHotel);
router.post('/bookHotel',controller.bookHotel);
router.get('/getBookedHotel',controller.getBookedHotel);

module.exports = router