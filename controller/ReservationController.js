const Reservation = require('../model/reservation');
const User = require('../model/user');



const booking = async(req,res) => {
  try {
    const { username,restaurant,numberphone,quantity,date,time} = req.body;
    const booking = new Reservation({ username,restaurant,numberphone,quantity,date,time });
    await booking.save();
    res.status(201).json({ message: 'Đặt bàn thành công!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getAllBooking = async(req,res) => {
  try {
    const bookings = await Reservation.find();
    res.json(bookings);
} catch (error) {
    console.log(error)
}
}

const getBookingById = async(req,res) => {
  Reservation.find({ id: req.params.id }, (err, bookings) => {
    if (err) {
        res.status(500).send(err);
    } else {
        res.status(200).json(bookings);
    }
});
}
module.exports = {booking,getAllBooking,getBookingById}