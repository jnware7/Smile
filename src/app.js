const express = require('express');
const app = require('express')()
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// const routes = require('./server/routes');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const env = require('dotenv').config();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.locals.heading = 'Smile';


app.use(express.static('public'));

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

// app.use('/', routes)

const port = process.env.PORT || 3000

app.listen(port,() => {
  console.log(`http://localhost:${port}`);
})
