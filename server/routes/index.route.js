const router = require('express').Router();

const apiSignRoute = require('./api/sign.api.route');

router.use('/api/sign', apiSignRoute);
// router.use('*', errRoute)

module.exports = router;
