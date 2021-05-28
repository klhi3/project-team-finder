const router = require('express').Router();
const { Blog, Project } = require('../models');

// Render dashboard
router.get('/', async (req, res) => {
  try {
    // RENDERS HANDLEBAR VIEWS
    res.render('dashboard', { loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;