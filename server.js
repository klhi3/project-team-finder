const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const compression = require('compression')

// Import the custom helper methods
const helpers = require('./utils/helpers');
// Incorporate the custom helper methods
const hbs = exphbs.create({ helpers });

const routes = require('./controllers');
const sequelize = require('./config/connection');
// const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// const hbs = exphbs.create({});

// set handlebars as the view engine

app.set('views', path.join(__dirname, 'views'));
// app.engine('handlebars', exphbs());
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// use compression
app.use(compression());

// Enables sessions and cookies
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
  
app.use(session(sess));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Allows files to be loaded from public directory
app.use(express.static(path.join(__dirname, 'public')));

//display images
app.use(express.static(path.join(__dirname + '/images')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on '+PORT));
});