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
    res.json({ message });
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
    res.json({ message });
  }
});

router.post('/', upload.single('img'), async (req, res) => {
  try {
    const { title, description, user_id } = req.body;
    let img;
    if (req.file) { 
      img = `/img/${req.file.originalname}`; 
  } else { 
      const currentProfile = await Cocktail.findOne({ where: { id } }); 
      img = currentProfile.img;  
  } 
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



router.put('/:id', upload.single('img'), async (req, res) => { 
  console.log(req.body, req.params); 
  try { 
      const { id } = req.params; 
      let { name, lastName, age, phoneNumber } = req.body; 
      let img; 
      if (req.file) { 
          img = `/img/${req.file.originalname}`; 
      } else { 
          const currentProfile = await Profile.findOne({ where: { id } }); 
          img = currentProfile.img;  
      } 

      await Profile.update({ name, lastName, age, phoneNumber, img }, { 
          where: { id }, 
          fields: ['name', 'lastName', 'age', 'phoneNumber', 'img'] 
      }); 

      const profile = await Profile.findOne({ where: { id } }); 
      res.status(200).json({ message: 'success', profile }); 
  } catch ({ message }) { 
      console.log(message); 
      res.status(500).json({ message: 'Ошибка при обновлении профиля' }); 
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
