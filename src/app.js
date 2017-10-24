const env = require('dotenv').config();//must be at the top of your project
const express = require('express');
const app = require('express')()
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const routes = require('./controllers/routes');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const middlewares = require('./controllers/middlewares')

// console.log("env: ", env)

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.locals.heading = 'Smile';

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'));
app.use(methodOverride('_method'))

app.use(session({
  secret: process.env.SECRET,
  resave:false,
  saveUninitialized: true,
}))

app.use((req, res, next) => {
  req.session.name ='sessionSmile'
  next()
})

app.use(middlewares.addUserToRequest);

app.use('/', routes)



const port = process.env.PORT1 || 3000

app.listen(port,() => {
  console.log(`http://localhost:${port}`);
})
