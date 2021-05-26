const router = require('express').Router();
const { Blog, Project } = require('../models');

// Render Homepage
router.get('/', async (req, res) => {
  try {
    // RENDERS HANDLEBAR VIEWS
    res.render('main');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;