const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      numberphone: {
        type: String,
        required: true
      },
      role: {
        type: String,
        enum: ['ADMIN', 'USER'],
        default: 'USER'
      }
})

module.exports = mongoose.model('User',userSchema);