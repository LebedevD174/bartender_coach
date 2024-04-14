const router = require('express').Router();

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

router.get('/', async (req, res) => {
  try {
    const ingredients = await Ingredient.findAll({
      include: [
        {
          model: Formula,
          attributes: ['id', 'cocktail_id', 'barware_id', 'drink_id', 'drinks_volume', 'tech_id', 'ingredient_id', 'ingredient_volume', 'order'],
          include: [
            {
              model: Cocktail,
              attributes: ['id', 'name'],
            },
          ],
        },
      ],
    });
  } catch ({ message }) {
    res.json({ message });
  }
});
