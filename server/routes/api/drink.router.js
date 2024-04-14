const router = require('express').Router();

const { Cocktail, Formula, Drink, Category } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const drinks = await Drink.findAll({
      include: [
        {
          model: Formula,
          attributes: [
            'id',
            'cocktail_id',
            'barware_id',
            'drink_id',
            'drinks_volume',
            'tech_id',
            'ingredient_id',
            'ingredient_volume',
            'order',
          ],
          include: [
            {
              model: Cocktail,
              attributes: ['id', 'title'],
            },
          ],
        },
        {
          model: Category,
          attributes: ['id', 'title'],
        },
      ],
    });
    res.status(200).json({ message: 'success', drinks });
  } catch ({ message }) {
    res.json({ message });
  }
});


module.exports = router;