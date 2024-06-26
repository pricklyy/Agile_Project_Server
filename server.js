const express = require('express');
const mongoose =require('mongoose');
const bodyParser = require('body-parser');

const UserRoutes = require('./router/UserRoutes');
const RestaurantRoutes = require('./router/RestaurantRoutes');
const ReservationRoutes = require('./router/ResersationRoutes');


const app = express();
app.use(bodyParser.json());
const port = 3070;

mongoose.connect('mongodb://localhost:27017/agile',{useNewUrlParser: true }).then(() => {
    console.log('Connect completed');
}).catch((err) => {
    console.log(`Connect failed ${err}`);
})

app.use("/api",UserRoutes);
app.use("/api",RestaurantRoutes);
app.use("/api",ReservationRoutes);
app.listen(port,() => {
    console.log(`Server is running`)
})