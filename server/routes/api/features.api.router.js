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
} = require('../../db/models');

/**
 * Получение всех свойств с коктейлями
 */
router.get('/', async (req, res) => {
  try {
    const features = await Feature.findAll({
      include: [
        {
          model: Formula,
          attributes: ['id', 'cocktail_id', 'barware_id', 'drink_id', 'drinks_volume', 'tech_id', 'ingredient_id', 'ingredient_volume', 'order'],
          include: [
            {
              model: Cocktail,
              attributes: ['id', 'title', 'description', 'img', 'user_id'],
              include: [
                {
                  model: CocktailFeature,
                  attributes: ['id', 'cocktail_id', 'feature_id'],
                  include: [{
                    model: Feature,
                    attributes: ['id', 'title'],
                  }],
                },
              ]
            },
            {
              model: Barware,
              attributes: ['id', 'title', 'img', 'description'],
            },
            {
              model: Ingredient,
              attributes: ['id', 'title', 'img', 'measure'],
            },
            {
              model: Tech,
              attributes: ['id', 'title', 'img', 'description'],
            },
            {
              model: Drink,
              attributes: ['id', 'title', 'img', 'description', 'category_id'],
            },
          ],
        },
      ],
    });
    res.json({ message: 'success', features });
  } catch ({ message }) {
    res.status(200).json({ error: message });
  }
});

/**
 * Получение всех коктейлей по свойству
 */
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const features = await Feature.findAll({
      where: { id },
      include: [
        {
          model: Formula,
          attributes: ['id', 'cocktail_id', 'barware_id', 'drink_id', 'drinks_volume', 'tech_id', 'ingredient_id', 'ingredient_volume', 'order'],
          include: [
            {
              model: Cocktail,
              attributes: ['id', 'title', 'description', 'img', 'user_id'],
            },
            {
              model: Barware,
              attributes: ['id', 'title', 'img', 'description'],
            },
            {
              model: Ingredient,
              attributes: ['id', 'title', 'img', 'measure'],
            },
            {
              model: Tech,
              attributes: ['id', 'title', 'img', 'description'],
            },
            {
              model: Drink,
              attributes: ['id', 'title', 'img', 'description', 'category_id'],
            },
          ],
        },
      ],
    });
    res.json({ message: 'success', features });
  } catch ({ message }) {
    res.status(200).json({ error: message });
  }
});

module.exports = router;
