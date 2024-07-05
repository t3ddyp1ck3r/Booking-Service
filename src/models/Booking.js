const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Room'
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['booked', 'checked-in', 'checked-out', 'cancelled'],
    default: 'booked',
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Booking', BookingSchema);
