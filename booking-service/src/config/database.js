const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  console.log('Connecting to MongoDB at:', process.env.MONGO_URI);  // Debugging line

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
