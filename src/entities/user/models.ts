import mongoose, { Document, Schema } from "mongoose";

// Define the user schema
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dob: { type: Date, required: true },
});

// Create the Mongoose model
export const UserModel = mongoose.model<UserDocument>("User", userSchema);

// Define the document interface
interface UserDocument extends Document {
  _id: Object;
  name: string;
  email: string;
  password: string;
  dob: Date;
}
