const express = require('express');
const connectDB = require('./config/database');
const bookingRoutes = require('./routes/bookingRoutes');
require('dotenv').config();

const app = express();

connectDB();

app.use(express.json());

app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
