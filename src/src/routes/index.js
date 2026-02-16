const express = require("express");
const router = express.Router();
const db = require("../db");

// Home page
router.get("/", async (req, res) => {
  // Example: pull a couple of listings to prove DB wiring
  let listings = [];
  try {
    const [rows] = await db.query(
      "SELECT id, title, category, created_at FROM listings ORDER BY id DESC LIMIT 5"
    );
    listings = rows;
  } catch (err) {
    // If DB isn't ready yet, still render page
    listings = [];
  }

  res.render("index", {
    title: "CampusCycle",
    groupName: "Brothers",
    listings
  });
});

// Health check (DB)
router.get("/health", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT 1 AS ok");
    res.json({ status: "ok", db: rows[0].ok === 1 });
  } catch (err) {
    res.status(500).json({ status: "error", db: false, message: err.message });
  }
});

module.exports = router;
