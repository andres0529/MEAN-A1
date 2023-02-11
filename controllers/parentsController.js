const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("parents", { parents: 'active', title:"My Parents" });
});

module.exports = router;