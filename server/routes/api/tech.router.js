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
    const techs = await Tech.findAll();
    res.json({ message: 'success', techs });
  } catch ({ message }) {
    res.status(200).json({ error: message });
  }
});


module.exports = router;
