const router = require('express').Router();
const auth = require('../../models/auth')


router.get('/signup', (req, res) => {
  res.render('signup')
});

const createSession = (session, user)=> {
  console.log('made user', user[0])
  session.user = user[0]
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
  const {name, email, password} = req.body
  console.log('=====', name, email, password)
  auth.create(name, email, password)
    .then(createdUser => {
      console.log('createdUser ====> ', createdUser)
      createSession(req.session, createdUser);
      console.log('userInSession ====> ', req.session.user)
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
