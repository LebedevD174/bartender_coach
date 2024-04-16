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
    const arr = req.body;
    const formulas = await (Promise.all(arr
    .map((el) => {
      const {cocktail_id, barware_id, drink_id, drinks_volume, tech_id, ingredient_id, ingredients_volume, order} = el;
      return Formula.create({
          cocktail_id,
          barware_id,
          drink_id,
          drinks_volume,
          tech_id,
          ingredient_id,
          ingredients_volume,
          order,
        });
    })
  ))
    res.status(200).json({ message: 'success' });
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
