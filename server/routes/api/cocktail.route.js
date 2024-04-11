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

router.get('/', async (req, res) => {
  try {
    const cocktail = Cocktail.findAll({
      include: [
        {
          model: Formula,
          attributes: ['id', 'title'],
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
            },
          ],
        },
        {
          model: CocktailFeature,
          attributes: ['id', 'cocktail_id', 'feature_id'],
          include: [{
            model: Feature,
            attributes: ['id', 'title'],
          }],
        },

      ],
    });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/', async (req, res) => {
  try {
    const {
      title, description, img, user_id,
    } = req.body;
    const cocktail = await Cocktail.create({
      title,
      description,
      img,
      user_id,
    });
    res.status(200).json({ message: 'success', cocktail });
  } catch ({ message }) {
    res.json(message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const cocktail = Cocktail.findOne({
      where: {
        [Op.and]: [
          { id },
          { user_id: userId },
        ],
      },
    });
    if (cocktail) {
      await Cocktail.destroy({
        where: { id },
      });
      res.status(200).json({ message: 'success' });
    } else {
      res.json({ message: 'fail to destroy' });
    }
  } catch ({ message }) {
    res.status(200).json({ error: message });
  }
});

module.exports = router;
