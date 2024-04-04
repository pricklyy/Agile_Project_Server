const Restaurant = require('../model/restaurant');

const getAllRestaurant = async (req,res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (error) {
        console.log(error)
    }
}

const getOneRestaurant = async(req,res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);
        if (!restaurant) return res.status(404).json({ error: 'Restaurant not found' });
        res.json(restaurant);
      } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
      }
}

const createRestaurant = async(req,res) => {
    try {
        const restaurant = new Restaurant(req.body);
        await restaurant.save();
        res.json(restaurant);
      } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
      }
}

const deleteRestaurant = async(req,res) => {
    try {
        const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
        if (!restaurant) return res.status(404).json({ error: 'Restaurant not found' });
        res.json({ message: 'Restaurant deleted' });
      } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
      }
}

const updateRestaurant = async(req,res) => {
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!restaurant) return res.status(404).json({ error: 'Restaurant not found' });
        res.json(restaurant);
      } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
      }
}
const searchRestaurant = async(req,res) => {
  try {
    const { name } = req.query;
    const restaurants = await Restaurant.find({ name: new RegExp(name, 'i') });
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {getAllRestaurant,getOneRestaurant,createRestaurant,deleteRestaurant,updateRestaurant,searchRestaurant}