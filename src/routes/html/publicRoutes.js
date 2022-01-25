const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    res.json({ data: "You have hit the home page" });
  } catch (error) {
    res.json({ error: "Oops! Can't load the home page" });
  }
});

module.exports = router;
