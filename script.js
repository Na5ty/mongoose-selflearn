import mongoose from "mongoose";
import User from "./User.js";

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://localhost:27017/testDB");
    console.log("Connected to DB");
  } catch (err) {
    console.error("Error connecting to DB:", err);
  }
}

connectToDatabase();

run();
async function run() {
  try {
    const user = await User.create({
      name: "John",
      age: 24,
      email: "WAS@teas.com",
      hobbies: ["reading", "swimming"],
      address: {
        street: "123 Main St",
        city: "Springfield",
      },
    });
    console.log(user);
  } catch (err) {
    console.error("Error creating user:", err);
  }
}
