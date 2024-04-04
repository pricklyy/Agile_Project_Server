const mongoose = require('mongoose');

const ReservationSchema = mongoose.Schema({
    username : {
        type : String,
    },
    restaurant : {
        type : String,
    },
    numberphone : {
        type  : Number,
    },
    quantity : {
        type :  Number,
    },
    date : {
        type : Date,
        default : Date.now(),
    },
    time : {
        type : String,
    }
})

module.exports = mongoose.model('Reservation',ReservationSchema);