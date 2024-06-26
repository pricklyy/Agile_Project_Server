const express = require('express');
const Routers = express.Router();
const {getAllRestaurant,getOneRestaurant,createRestaurant,deleteRestaurant,updateRestaurant,searchRestaurant} = require('../controller/RestaurantController');


Routers.get('/getAllRestaurant',getAllRestaurant);
Routers.get('/getOneRestaurant/:id',getOneRestaurant);
Routers.post('/create/restaurant',createRestaurant);
Routers.delete('/delete/restaurant/:id',deleteRestaurant);
Routers.patch('/update/restaurant/:id',updateRestaurant);
Routers.get('/search',searchRestaurant);
module.exports = Routers;

