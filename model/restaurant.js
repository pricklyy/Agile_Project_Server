const mongoose = require('mongoose');

const RestaurantSchema = mongoose.Schema({
    name : {
        type : String,
        
    },
    description : {
        type : String,
        
    },
    rating : {
        type : Number,
    },
    closingTime : {
        type : String
    },
    openingTime : {
        type : String,
    },
    imageUrl : {
        type : String,
    }
    

})

module.exports = mongoose.model('Restaurant',RestaurantSchema);