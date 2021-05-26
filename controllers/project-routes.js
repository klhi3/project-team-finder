const router = require('express').Router();
const { Project, User } = require('../models');

// Render Homepage
router.get('/', async (req, res) => {
  try {
    // RENDERS HANDLEBAR VIEWS
    // enter handlebars view file for users here
    res.render('');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;