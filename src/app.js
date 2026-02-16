require("dotenv").config();

const express = require("express");
const path = require("path");

const indexRoutes = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 3000;

// View engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", indexRoutes);

// Basic 404
app.use((req, res) => {
  res.status(404).send("404 - Not Found");
});

// Start server
app.listen(PORT, () => {
  console.log(`CampusCycle running at http://localhost:${PORT}`);
});
