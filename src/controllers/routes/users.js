const router = require('express').Router();
const users = require('../../models/users')
const quotes = require('../../models/quotes')

router.get('/profile', (req, res) => {
const user = req.session.user
const users_id = req.session.user.id
const author = req.body.author
const quote = req.body.quote

Promise.all([
  quotes.getByUserId(users_id),
  quotes.getUserFav(users_id)
])
.then((userQuotes)=>{
  console.log('asdfasef aew=========>', userQuotes);
  return userQuotes.reduce( (a, b) => a.concat(b),[])
})
.then((allUserQuotes)=>{
  console.log('step 2222===>', allUserQuotes);
  shuffleQuotes(allUserQuotes)

  let quote = allUserQuotes[0].quote
  let author = allUserQuotes[0].author

 res.render('profile',{name: user.name, image: user.image, quote:quote, author:author})
})
})
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

router.post('/new/quote', (req,res) => {
 const user = req.session.user
 const users_id = req.session.user.id
 const author = req.body.author
 const quote = req.body.quote

 Promise.all([
   quotes.create(users_id, author, quote),
   quotes.getByUserId(users_id),
   quotes.getUserFav(users_id)
 ])
 .then((userQuotes)=>{
   console.log('asdfasef aew=========>', userQuotes);
   return userQuotes.reduce( (a, b) => a.concat(b),[])
 })
 .then((allUserQuotes)=>{
   console.log('step 2222===>', allUserQuotes);
   shuffleQuotes(allUserQuotes)

   let quote = allUserQuotes[0].quote
   let author = allUserQuotes[0].author

  res.render('profile',{name: user.name, image: user.image, quote:quote, author:author})
 })
})
module.exports = router
