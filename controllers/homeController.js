const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { index: 'active', title:"Me" });
});

module.exports = router;
