const router = require('express').Router();

const apiSignRoute = require('./api/sign.api.route');
const apiQuestionRoute = require('./api/question.api.router');
const apiCategoriesRoute = require('./api/categories.api.router');

router.use('/api/sign', apiSignRoute);
router.use('/api/questions', apiQuestionRoute);
router.use('/api/categories', apiCategoriesRoute);
// router.use('*', errRoute)

module.exports = router;
