const mongoose = require('mongoose')

const mongoURI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("MongoDB Connected...");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1); 
    }
};

module.exports = connectDB;
