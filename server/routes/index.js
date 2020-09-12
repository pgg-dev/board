var express = require("express");
var router = express.Router();

const data = { test: "b" };
router.get("/", (req, res, next) => {
  res.send("root");
});

router.get("/api", (req, res, next) => {
  res.json([{ id: 1, username: "VictorOladipo" }]);
});

module.exports = router;
