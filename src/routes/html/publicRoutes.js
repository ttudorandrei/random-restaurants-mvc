const { default: axios } = require("axios");

const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    res.status(200).render("homepage");
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
});

router.get("/restaurants", async (req, res) => {
  try {
    const getRestaurants = async () => {
      const axiosConfig = {
        method: "GET",
        url: "https://random-data-api.com/api/restaurant/random_restaurant?size=5",
      };

      const response = await axios(axiosConfig);
      const restaurants = response.data;

      return restaurants;
    };

    const data = { restaurantsList: await getRestaurants() };

    res.status(200).render("restaurants", { data });
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
});

module.exports = router;
