const mongoose = require('mongoose');

const uri = "mongodb+srv://t3ddyp1ck3r:t3ddyp1ck3r@cluster0.ojzaipx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";  

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
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
