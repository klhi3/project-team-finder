 const router = require('express').Router();
const apiRoutes = require('./api');
const mainRoute = require('./main-route');
const userRoutes = require('./user-routes');
const projectRoutes = require('./project-routes');
const dashRoute = require('./dashboard-route');

router.use('/api', apiRoutes);
router.use('/', mainRoute);
router.use('/user', userRoutes);
router.use('/project', projectRoutes);
router.use('/dashboard', dashRoute);

module.exports = router;