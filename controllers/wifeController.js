const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("wife", { wife: 'active', title:"My Wife" });
});

module.exports = router;
