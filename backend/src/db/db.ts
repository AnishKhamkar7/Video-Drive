import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);

    console.log("MONGO DB CONNECTED!!!");
  } catch (error) {
    console.log("MONGO CONNECTION FAILED!!!", error);
    process.exit(1);
  }
};

export default connectDB;
