const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  try {
    const { userId, roomId, startDate, endDate } = req.body;
    const booking = new Booking({
      userId,
      roomId,
      startDate,
      endDate,
    });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('userId roomId');
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('userId roomId');
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBooking = async (req, res) => {
  try {
    const { startDate, endDate, status } = req.body;
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    booking.startDate = startDate || booking.startDate;
    booking.endDate = endDate || booking.endDate;
    booking.status = status || booking.status;
    await booking.save();
    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    await booking.remove();
    res.status(200).json({ message: 'Booking removed' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
