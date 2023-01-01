const express = require("express");
const router = express.Router();
const Present = require("../models/Present");

/* GET users listing. */
router.get("/", (req, res, next) => {
  Present.find({})
    .then((presentsFromDB) => res.render("all-presents", { presentsFromDB }))
    .catch((err) => console.log(err));
});

router.get("/new", (req, res, next) => res.render("new-present"));
router.post("/new", (req, res, next) => {
  const { name, image, price, recipient, description } = req.body;
  //const price = Number(req.body.price) porque aunque lo fuerza, se lo pasamos previamente como un string;
  Present.create({
    name,
    image,
    price,
    recipient,
    description,
  })
    .then(() => res.redirect("/presents"))
    .catch((err) => console.log(err));
});
router.get("/delete/:id", (req, res, next) => {
  const { id } = req.params;
  Present.findByIdAndDelete(id)
    .then(() => res.redirect("/presents"))
    .catch((err) => console.log(err));
});

router.get("/:presentId", (req, res, next) => {
  const { presentId } = req.params;
  Present.findById(presentId).then((presentFromDB) =>
    res.render("present-detall", presentFromDB)
  );
});

module.exports = router;
