const router = require('express').Router();

router.get('/signup', (req, res) => {
  res.render('signup')
});

const createSession = (session,user)=> {
  console.log('made user')
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
  const { name, email, password } = req.body
  users.findByEmail(email)
  .then((newUser)=>{
    if(newUser){
      createSession(req.session, newUser);
      res.redirect('/login')
    }else{
    users.create(name, email, password)
    .then((createdUser) => {
    createSession(req.session, createdUser);
    res.redirect('/profile')
    })
    .catch(error => {
      console.error({message:"Error occured while executing /signup", arguments: arguments});
      throw error
    })
    }
  })
})

router.get('/login',(req, res) => {
  res.render('login')
});
module.exports = router
