const express = require('express');
const Routers = express.Router();

const {booking,getAllBooking,getBookingById} = require('../controller/ReservationController');

Routers.post('/reservations',booking);
Routers.get('/getAllBooking',getAllBooking);
Routers.get('/getBooking/:id',getBookingById);

module.exports = Routers;
