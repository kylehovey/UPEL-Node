const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  // Respond
  res.json({
    success : true,
    results : "Hello World!"
  });

  next();
});

module.exports = router;
