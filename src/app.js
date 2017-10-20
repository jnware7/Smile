const express = require('express');
const app = require('express')()
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const routes = require('./controllers/routes');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const env = require('dotenv').config();
const middlewares = require('./controllers/middlewares')

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
  cookie: {secure: true, maxAge: 60000}
}))

app.use((req, res, next) => {
  req.session.name ='sessionSmile'
  console.log(req.session)
  next()
})

app.use('/', routes)

app.use(middlewares.addUserToRequest);


const port = process.env.PORT1 || 3000

app.listen(port,() => {
  console.log(`http://localhost:${port}`);
})
