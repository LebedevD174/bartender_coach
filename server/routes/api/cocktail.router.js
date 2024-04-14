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

router.get('/', async (req, res) => {
  try {
    const cocktails = await Cocktail.findAll({
      where: {status: true},
      include: [
        {
          model: Formula,
          attributes: ['id', 'cocktail_id', 'barware_id', 'drink_id', 'drinks_volume', 'tech_id', 'ingredient_id', 'ingredient_volume', 'order'],
          include: [
            {
              model: Barware,
              attributes: ['id', 'title', 'description', 'img'],
            },
            {
              model: Ingredient,
              attributes: ['id', 'title', 'img', 'measure'],
            },
            {
              model: Tech,
              attributes: ['id', 'title', 'description', 'img'],
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
    res.status(200).json({message: 'success', cocktails});
  } catch ({ message }) {
    res.json({ message });
  }
});


router.post('/', async (req, res) => {
  try {
    const { title, description, img, user_id } = req.body;
    const cocktail = await Cocktail.create({
      title,
      description,
      img,
      user_id,
      status: false,
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
        [Op.and]: [{ id }, { user_id: userId }],
      },
    });
    if (cocktail) {
      await Cocktail.destroy({
        where: { id },
      });
      res.status(200).json({ message: 'success' });
    } else {
      res.json({ message: 'failed to destroy' });
    }
  } catch ({ message }) {
    res.status(200).json({ error: message });
  }
});

module.exports = router;
