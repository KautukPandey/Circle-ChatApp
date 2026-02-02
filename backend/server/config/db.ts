import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log("Connection successful")
    } catch (error) {
        console.log('MongoDB connection failed:');
        process.exit(1)
    }
}

export default connectDB