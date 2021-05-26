const router = require('express').Router();
const apiRoutes = require('./api');
const loginRoute = require('./main-route');

router.use('/api', apiRoutes);
router.use('/', mainRoute);

module.exports = router;
