const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("sister", { sister: 'active', title:"My Sisters" });
});

module.exports = router;