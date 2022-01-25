const express = require("express");
const cors = require("cors");
const path = require("path");
const handlebars = require("express-handlebars");

const PORT = 3000;

const app = express();

const handlebarsOptions = {};

const hbs = handlebars.create(handlebarsOptions);

// using handlebars engine
app.engine("handlebars", hbs.engine);
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "handlebars");

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../", "public")));
app.get("/", (req, res) => {
  try {
    res.json({ data: "Here is some test data" });
  } catch (error) {
    res.json({ error: "OOps! There was an error!" });
  }
});

const init = async () => {
  try {
    app.listen(PORT, () =>
      console.log(`\nServer running on http://localhost:${PORT}\n`)
    );
  } catch (error) {
    console.error(error.message);
  }
};

init();
