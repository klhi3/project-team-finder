const path=require("path"),express=require("express"),session=require("express-session"),exphbs=require("express-handlebars"),SequelizeStore=require("connect-session-sequelize")(session.Store),helpers=require("./utils/helpers"),hbs=exphbs.create({helpers:helpers}),routes=require("./controllers"),sequelize=require("./config/connection"),app=express(),PORT=process.env.PORT||3001;app.set("views",path.join(__dirname,"views")),app.engine("handlebars",hbs.engine),app.set("view engine","handlebars");const sess={secret:"Super secret secret",cookie:{},resave:!1,saveUninitialized:!0,store:new SequelizeStore({db:sequelize})};app.use(session(sess)),app.use(express.json()),app.use(express.urlencoded({extended:!0})),app.use(express.static(path.join(__dirname,"public"))),app.use(express.static(path.join(__dirname+"/images"))),app.use(routes),sequelize.sync({force:!1}).then(()=>{app.listen(PORT,()=>console.log("Now listening on "+PORT))});