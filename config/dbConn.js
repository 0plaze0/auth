import mongoose from "mongoose";

export const connectDB = async (uri) => {
  try {
    const conn = await mongoose.connect(uri);
    console.log(`connected to MongoDB Database ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};
