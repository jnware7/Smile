const router = require('express').Router();
const auth = require('../../models/auth')


router.get('/signup', (req, res) => {
  res.render('signup')
});

const createSession = (session, user)=> {
  console.log('made user', user)
  session.user = user
};

router.use((req, res, next) => {
  if(req.session.user) {
    res.locals.isLoggedIn = true
  } else {
    res.locals.isLoggedIn = false
  }
  next()
});

router.post('/new/signup',(req, res) => {
  const user = req.body
  auth.create(user.name, user.email, user.password)
    .then(createdUser => {
      console.log('where is a user in this insanity???', createdUser)
      createSession(req.session, createdUser);
      res.redirect('/profile')
    })
    .catch(error => {
      console.error({message:"Error occured while executing /signup", arguments: arguments});
      throw error
    })
  })

router.get('/login',(req, res) => {
  res.render('login')
});
module.exports = router
