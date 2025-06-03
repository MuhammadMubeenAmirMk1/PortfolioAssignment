import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";

import educationRouter from "./routes/educationroutes.js";
import educationdata from "./data/educationdata.js";
import Education from "./models/education.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");

    // Seed only if collection is empty
    const count = await Education.countDocuments();
    if (count === 0) {
      await Education.insertMany(educationSeed);
      console.log("Education data seeded into MongoDB");
    } else {
      console.log("Education collection already contains data.");
    }
  })
  .catch((err) => console.error(err));

app.use("/api/education", educationRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
