import express from "express";
import Education from "../models/education.js";

const router = express.Router();

// GET all education data
router.get("/", async (req, res) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST to add data (for testing)
router.post("/", async (req, res) => {
  const { degree, institution, graduationYear } = req.body;
  try {
    const newEntry = new Education({ degree, institution, graduationYear });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
