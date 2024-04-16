const router = require('express').Router();
const { User, Profile } = require('../../db/models');
const multer = require('multer');

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

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await Profile.findOne({ where: { id } });
    res.status(200).json({ message: 'success', profile });
  } catch ({ message }) {
    console.log(message);
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

    await Profile.update(
      { name, lastName, age, phoneNumber, img },
      {
        where: { id },
        fields: ['name', 'lastName', 'age', 'phoneNumber', 'img'],
      }
    );

    const profile = await Profile.findOne({ where: { id } });
    res.status(200).json({ message: 'success', profile });
  } catch ({ message }) {
    console.log(message);
    res.status(500).json({ message: 'Ошибка при обновлении профиля' });
  }
});

module.exports = router;
