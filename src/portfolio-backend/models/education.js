import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  graduationYear: { type: String, required: true },
});

const Education = mongoose.model("Education", educationSchema);

export default Education;
