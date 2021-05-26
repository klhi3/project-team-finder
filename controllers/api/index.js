const router = require('express').Router();
<<<<<<< HEAD
// const loginRoute = require('./login-route');

// router.use('/login', loginRoute);

module.exports = router;
=======

const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

module.exports = router;
>>>>>>> main
