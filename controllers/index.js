const router = require('express').Router();
const apiRoutes = require('./api');
const mainRoute = require('./main-route');
const userRoutes = require('./user-routes');
const projectRoutes = require('./project-routes');

router.use('/api', apiRoutes);
router.use('/', mainRoute);
router.use('/user', userRoutes);
router.use('/project', projectRoutes);

module.exports = router;
