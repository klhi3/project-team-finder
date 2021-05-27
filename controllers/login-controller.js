const UserService = require('./Services/user-service');

module.exports = {
  showSignUpPage: async (req, res) => {
    res.render('signup');
    // res.json("Showsignuppage");
  },
  signup: async (req, res) => {
    try {
      delete req.session.user;
      const user = await UserService.signup(req.body.username, req.body.password, req.body.email, req.body.city, req.body.state);
      res.send(user);
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
      // res.send(user);
      if(user) {
        // Create session, saved logged in as true
        req.session.save(() => {
          // TODO: Once the user successfully logs in, set up sessions with the 'loggedIn' variable
          req.session.loggedIn = true;
        });
        // login successful
        const redirectTo = req.query.redirectTo || '/?loggedin';
        req.session.user = user;
        res.redirect(redirectTo);
        res.json("logged in");
      } else {
        // login failed
        res.redirect("/login?error=login+unsuccessful");
      }
    } catch (err) {
      console.log(`LoginController.login(): Error loging in "${username}" with pass "${password}"`, err)
    }
  },
  logout: (req, res) => {
    // When the user logs out, the session is destroyed
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  }
};
