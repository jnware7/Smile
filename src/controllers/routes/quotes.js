const router = require('express').Router();
const quotes = require('../../models/quotes')

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

// router.post('/new/quote', (req,res) => {
//  const user = req.session.user
//  const users_id = req.session.user.id
//  const author = req.body.author
//  const quote = req.body.quote
//   console.log("users", req.session.user);
//
//  Promise.all([
//    quotes.create(users_id, author, quote),
//    quotes.getByUserId(users_id),
//    quotes.getUserFav(users_id)
//  ])
//  .then((userQuotes)=>{
//    console.log("userQuotes==>" , userQuotes)
//    return userQuotes.reduce( (a, b) => {return a.concat(b)},[])
//  })
//  .then((allUserQuotes)=>{
//   shuffleQuotes(allUserQuotes)
//   res.render('profile',{name: user.name, image: user.image, quote:allUserQuotes})
//  })
// })

module.exports = router
