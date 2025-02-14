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
    const features = await Feature.findAll({
      include: [
        {
          model: CocktailFeature,
          attributes: ['id', 'cocktail_id', 'feature_id'],
          include: [{
            model: Cocktail,
            attributes: ['id', 'title', 'description', 'img', 'user_id'],
            include: [
              { model: Formula,
                attributes: ['id', 'cocktail_id', 'barware_id', 'drink_id', 'drinks_volume', 'tech_id', 'ingredient_id', 'ingredient_volume', 'order'],
                include: [
                  {
                    model: Barware,
                    attributes: ['id', 'title'],
                  },
                  {
                    model: Ingredient,
                    attributes: ['id', 'title'],
                  },
                  {
                    model: Tech,
                    attributes: ['id', 'title'],
                  },
                  {
                    model: Drink,
                    attributes: ['id', 'title', 'description', 'category_id', 'img'],
                    include: [{
                      model: Category,
                      attributes: ['id', 'title'],
                    }]
                  },
                ],
            }
          ]
          }]
        }
      ]
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
    const {id} = req.params
    const features = await Feature.findAll({
      where: {id},
      include: [
        {
          model: CocktailFeature,
          attributes: ['id', 'cocktail_id', 'feature_id'],
          include: [{
            model: Cocktail,
            attributes: ['id', 'title', 'description', 'img', 'user_id'],
            include: [
              { model: Formula,
                attributes: ['id', 'cocktail_id', 'barware_id', 'drink_id', 'drinks_volume', 'tech_id', 'ingredient_id', 'ingredient_volume', 'order'],
                include: [
                  {
                    model: Barware,
                    attributes: ['id', 'title'],
                  },
                  {
                    model: Ingredient,
                    attributes: ['id', 'title'],
                  },
                  {
                    model: Tech,
                    attributes: ['id', 'title'],
                  },
                  {
                    model: Drink,
                    attributes: ['id', 'title', 'description', 'category_id', 'img'],
                    include: [{
                      model: Category,
                      attributes: ['id', 'title'],
                    }]
                  },
                ],
            }
          ]
          }]
        }
      ]
    });
    res.json({ message: 'success', features });
  } catch ({ message }) {
    res.status(200).json({ error: message });
  }
});

module.exports = router;
