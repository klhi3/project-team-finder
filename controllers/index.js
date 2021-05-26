const router = require('express').Router();
<<<<<<< HEAD
const apiRoutes = require('./api');
const mainRoute = require('./main-route');

router.use('/api', apiRoutes);
router.use('/', mainRoute);

module.exports = router;
=======

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
>>>>>>> main
