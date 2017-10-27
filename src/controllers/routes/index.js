const router = require('express').Router();
const auth = require('./auth');
const users = require('./users');
const quotes = require('./quotes');
const quote = require('../../models/quotes')

var shuffleQuotes = function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array[0];
}

router.get('/', (req, res) => {
   quote.getAll()
  .then((allQuotes) => {
  
    shuffleQuotes(allQuotes)
    res.render('home',{quote:allQuotes[0].quote, author:allQuotes[0].author, quote_id: allQuotes[0].id})
  })
})
// router.use((req, res, next) => {
//
//   if(typeof req.session.user === 'object' && Object.keys(req.session.user).length !== 0) {
//     res.locals.isLoggedIn = true
//   } else {
//     res.locals.isLoggedIn = false
//   }
//   console.log('isLoggedIn',res.locals.isLoggedIn);
//   next()
// });

router.use('/quotes', quotes)
router.use('/auth', auth)
router.use('/users', users)

module.exports = router
