const express = require("express");
const router = express.Router();
const Present = require("../models/Present");

/* GET users listing. */
router.get("/", (req, res, next) => {
  Present.find({})
    .then((presentsFromDB) => res.render("all-presents", { presentsFromDB }))
    .catch((err) => console.log(err));
});
router.get("/:presentId", (req, res, next) => {
  const { presentId } = req.params;
  Present.findById(presentId).then((presentFromDB) =>
    res.render("present-detall", presentFromDB)
  );
});

module.exports = router;
