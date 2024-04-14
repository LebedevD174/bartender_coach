const router = require('express').Router();

const apiSignRoute = require('./api/sign.api.router');
const apiCocktailsRoute = require('./api/cocktail.router');
const apiDrinksRoute = require('./api/drink.router');
const apiFeaturesRoute = require('./api/features.api.router');
const apiProfileRoute = require('./api/profile.router')

router.use('/api/sign', apiSignRoute);
router.use('/api/cocktails', apiCocktailsRoute);
router.use('/api/drinks', apiDrinksRoute);
router.use('/api/features', apiFeaturesRoute);
router.use('/api/profile', apiProfileRoute)
// router.use('*', errRoute)

module.exports = router;
