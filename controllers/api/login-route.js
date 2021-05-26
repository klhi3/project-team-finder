const router = require('express').Router()
const LoginController = require('../Controllers/login-controller');

// log-in Route - refers to layouts
router
    .route('/login')
        .get(LoginController.showLoginPage)
        .post(LoginController.login);

// signup Route - refers to layouts
router
    .route('/signup')
        .get(LoginController.showSignUpPage)
        .post(LoginController.signup);

router
    .route('/logout')
        .get(LoginController.logout)
        .post(LoginController.logout);

module.exports = router