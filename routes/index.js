const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./Api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.redirect('/')
});

module.exports = router;
