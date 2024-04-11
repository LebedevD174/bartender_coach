const router = require('express').Router();
const {
   Category,
} = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    const response = { message: 'success', categories };
    res.send(response);
  } catch ({ message }) {
    res.status(200).json({ error: message });
  }
});


module.exports = router;
