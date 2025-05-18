const mongoose = require("mongoose");

const EducationSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  graduationYear: { type: String, required: true },
});

module.exports = mongoose.model("Education", EducationSchema);
