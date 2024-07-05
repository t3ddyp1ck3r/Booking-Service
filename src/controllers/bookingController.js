const Booking = require('../models/Booking');

const addHistoryEntry = (booking, status, note = '') => {
  booking.history.push({ status, note });
  booking.status = status;
};

exports.createBooking = async (req, res) => {
  try {
    const { userId, roomId, startDate, endDate } = req.body;
    const booking = new Booking({
      userId,
      roomId,
      startDate,
      endDate
    });
    addHistoryEntry(booking, 'booked', 'Initial booking');
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBooking = async (req, res) => {
  try {
    const { startDate, endDate, status, note } = req.body;
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    booking.startDate = startDate || booking.startDate;
    booking.endDate = endDate || booking.endDate;
    if (status && status !== booking.status) {
      addHistoryEntry(booking, status, note);
    }
    await booking.save();
    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


