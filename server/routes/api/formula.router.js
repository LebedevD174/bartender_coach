const router = require('express').Router();
const { Op } = require('sequelize');
const {
  Cocktail,
  Formula,
  Feature,
  CocktailFeature,
  Barware,
  Ingredient,
  Tech,
  Drink,
  Category,
} = require('../../db/models');


router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const arr = req.body;
    console.log(arr[0]);
    // const cocktail = await Cocktail.create({
    //   title,
    //   description,
    //   img,
    //   user_id: +user_id,
    //   status: false,
    //   category_id: +category_id,
    // });
    res.status(200).json({ message: 'success' });
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
