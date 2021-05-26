const UserService = require('../Services/user-service');

module.exports = {
  showSignUpPage: async (req, res) => {
    res.render('signup');
  },
  signup: async (req, res) => {
    console.log('signup')
    try {
      delete req.session.user;
      const user = await UserService.signup(req.body.username, req.body.password);

      if(user) {
        // login successful
        const redirectTo = req.query.redirectTo || '/?signedup';
        req.session.user = user;
        res.redirect(redirectTo);
      } else {
        // login failed
        res.redirect("/signup?error=login+unsuccessful");
      }
    } catch (err) {
      console.log(`LoginController.login(): Error loging in "${username}" with pass "${password}"`, err)
    }
  },
  showLoginPage: async (req, res) => {
    console.log('showLoginPage')
    res.render('login')
  },
  login: async (req, res) => {
    console.log('login')
    try {
      delete req.session.user;
      const user = await UserService.login(req.body.username, req.body.password);

      if(user) {
        // login successful
        const redirectTo = req.query.redirectTo || '/?loggedin';
        req.session.user = user;
        res.redirect(redirectTo);
      } else {
        // login failed
        res.redirect("/login?error=login+unsuccessful");
      }
    } catch (err) {
      console.log(`LoginController.login(): Error loging in "${username}" with pass "${password}"`, err)
    }
  },
  logout: (req, res) => {
    delete req.session.user;
    res.redirect('/?loggedout');
  }
};
