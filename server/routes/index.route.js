const router = require('express').Router();

const apiSignRoute = require('./api/sign.api.route');
const apiCocktailsRoute = require('./api/cocktails.api.router');
const apiFeaturesRoute = require('./api/features.api.router');

router.use('/api/sign', apiSignRoute);
router.use('/api/cocktails', apiCocktailsRoute);
router.use('/api/categories', apiFeaturesRoute);
// router.use('*', errRoute)

module.exports = router;
