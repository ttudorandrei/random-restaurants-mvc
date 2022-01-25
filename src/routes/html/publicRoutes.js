const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    res.render("homepage");
  } catch (error) {
    res.json({ error: "Oops! Can't load the home page" });
  }
});

router.get("/restaurants", (req, res) => {
  try {
    res.json({ data: "You have hit the restaurants page" });
  } catch (error) {
    res.json({ error: "Oops! Can't load the restaurants page" });
  }
});

module.exports = router;
