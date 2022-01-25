const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    res.status(200).render("homepage");
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
});

router.get("/restaurants", (req, res) => {
  try {
    res.status(200).render("restaurants");
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
});

module.exports = router;
