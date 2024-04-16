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

/**
 * Получение всех свойств с коктейлями
 */
router.get('/', async (req, res) => {
  try {
    const ingredient = await Ingredient.findAll();
    res.json({ message: 'success', ingredient });
  } catch ({ message }) {
    res.status(200).json({ error: message });
  }
});


module.exports = router;
