import mongoose from "mongoose";
import { config } from "dotenv";
config();

const connectToDatabase = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
      throw new Error("Mongo Uri is not defined in the environment variables");
    }
    await mongoose.connect(mongoUri);
    console.log("Your connected to the MongoDB");
  } catch (error) {
    console.error("Error while connecting to the MongoDB: ", error);
    process.exit(1);
  }
};

export default connectToDatabase;
