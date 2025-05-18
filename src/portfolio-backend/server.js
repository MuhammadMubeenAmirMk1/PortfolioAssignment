const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const educationRoutes = require("./routes/educationroutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// Routes
app.use("/api/education", educationRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error("DB connection error:", err));
// Temporarily inserting one record
const Education = require("./models/Education");
const existing = await Education.findOne();
if (!existing) {
  await Education.create({
    degree: "Bachelor's in Computer Science",
    institution: "Information Technology University",
    graduationYear: "2025 (Expected)",
  });
  console.log("Sample education inserted.");
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
