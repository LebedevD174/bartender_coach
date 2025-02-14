const router = require('express').Router();
const multer = require('multer');
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

//Настройка мультера
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public/img');
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.get('/', async (req, res) => {
  try {
    const cocktails = await Cocktail.findAll({
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
              include: [
                {
                  model: Category,
                  attributes: ['id', 'title'],
                },
              ],
            },
          ],
        },
        {
          model: CocktailFeature,
          attributes: ['id', 'cocktail_id', 'feature_id'],
          include: [
            {
              model: Feature,
              attributes: ['id', 'title'],
            },
          ],
        },
      ],
    });
    res.status(200).json({ message: 'success', cocktails });
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const cocktails = await Cocktail.findOne({
      where: { id },
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
              include: [
                {
                  model: Category,
                  attributes: ['id', 'title'],
                },
              ],
            },
          ],
        },
        {
          model: CocktailFeature,
          attributes: ['id', 'cocktail_id', 'feature_id'],
          include: [
            {
              model: Feature,
              attributes: ['id', 'title'],
            },
          ],
        },
      ],
    });
    res.status(200).json({ message: 'success', cocktails });
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

router.post('/', upload.single('img'), async (req, res) => {
  try {
    const { title, description, user_id, category_id, feature_id } = req.body;
    let img;
    if (req.file) {
      img = `/img/${req.file.originalname}`;
    } else {
      img = '/img/imgCocktail.jpg';
    }
    const cocktail = await Cocktail.create({
      title,
      description,
      img,
      user_id: +user_id,
      status: false,
      category_id: +category_id,
    });
    await CocktailFeature.create({cocktail_id: cocktail.id, feature_id: +feature_id})
    res.status(200).json({ message: 'success', cocktail });
  } catch ({ message }) {
    res.status(400).json(message);
  }
});

router.put('/:id', upload.single('img'), async (req, res) => {
  try {
      const { id } = req.params;
      let { title, description } = req.body;
      let img;
      if (req.file) {
          img = `/img/${req.file.originalname}`;
      } else {
          const currentCocktail = await Cocktail.findOne({ where: { id } });
          img = currentCocktail.img; 
      }

      await Cocktail.update({ title, description, img }, {

          where: { id },
          fields: ['title', 'description', 'img']
      });

      const cocktail = await Cocktail.findOne({ where: { id } });
      res.status(200).json({ message: 'success', cocktail });
  } catch ({ message }) {
      console.log(message);
      res.status(500).json({ message: 'Ошибка при обновлении коктейля' });
  }
});

router.put('/updatestatus/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const cocktail = await Cocktail.findOne({where: { id }});
    if (cocktail) {
      await Cocktail.update({ status: true }, {
        where: { id },
        fields: ['status']
    });
      res.status(200).json({ message: 'success' });
    } else {
      res.status(400).json({ message: 'failed to update status' });
    }
  } catch ({ message }) {
    res.status(400).json({ error: message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const cocktail = await Cocktail.findOne({
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
      res.status(400).json({ message: 'failed to destroy' });
    }
  } catch ({ message }) {
    res.status(400).json({ error: message });
  }
});

router.delete('/admin/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const cocktail = await Cocktail.findOne({
      where: {id},
    });
    if (cocktail) {
      await Cocktail.destroy({
        where: { id },
      });
      res.status(200).json({ message: 'success' });
    } else {
      res.status(400).json({ message: 'failed to destroy' });
    }
  } catch ({ message }) {
    res.status(400).json({ error: message });
  }
});

module.exports = router;
