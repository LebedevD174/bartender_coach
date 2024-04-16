const router = require('express').Router();

const apiSignRoute = require('./api/sign.api.router');
const apiCocktailsRoute = require('./api/cocktail.router');
const apiDrinksRoute = require('./api/drink.router');
const apiFeaturesRoute = require('./api/features.api.router');
const apiProfileRoute = require('./api/profile.router')
const apiBarwareRoute = require('./api/barware.router')
const apiIngredientRoute = require('./api/ingredient.router')
const apiTechRoute = require('./api/tech.router')
const apiFormulaRoute = require('./api/formula.router')

router.use('/api/sign', apiSignRoute);
router.use('/api/cocktails', apiCocktailsRoute);
router.use('/api/drinks', apiDrinksRoute);
router.use('/api/features', apiFeaturesRoute);
router.use('/api/profile', apiProfileRoute)
router.use('/api/barware', apiBarwareRoute)
router.use('/api/ingredient', apiIngredientRoute)
router.use('/api/tech', apiTechRoute)
router.use('/api/formula', apiFormulaRoute)
// router.use('*', errRoute)

module.exports = router;
