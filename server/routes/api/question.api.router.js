const router = require('express').Router();
const {
  Question, User, Category, Cost,
} = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const questions = await Question.findAll({
      include: [
        {
          model: Category,
          attributes: ['id', 'title'],
        }, {
          model: Cost,
          attributes: ['id', 'cost'],
        },
      ],
    });
    const response = { message: 'success', questions };
    res.send(response);
  } catch ({ message }) {
    res.status(200).json({ error: message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const question = await Question.findOne({
      where: { id },
      include: [
        {
          model: Category,
          attributes: ['id', 'title'],
        }, {
          model: Cost,
          attributes: ['id', 'cost'],
        },
      ],
    });
    const response = { message: 'success', question };
    res.send(response);
  } catch ({ message }) {
    res.status(200).json({ error: message });
  }
});

module.exports = router;
