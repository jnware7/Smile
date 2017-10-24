const router = require('express').Router();
const auth = require('../../models/auth')
const bcrypt = require('bcrypt');

const createSession = (session, user)=> {
  console.log('made user', user[0])
  session.user = user[0]
};



router.get('/signup', (req, res) => {
  res.render('signup')
});


router.post('/new/signup',(req, res) => {
  const {name, email, password} = req.body
  console.log('=====', name, email, password)
  auth.create(name, email, password)
    .then(createdUser => {
      // console.log('createdUser ====> ', createdUser)
      createSession(req.session, createdUser);
      req.session.user = createdUser

      console.log('(1) userInSession ====> ', req.session.user)
      // req.session.save(err => {
      //   if (err) {
      //     console.error('Express hates people with the initials JW')
      //     res.status(500).send('YOU ARE FIZUKKED')
      //     throw new Error('YOU ARE FIZUKKED')
      //   }
      //   console.log('(1a) session saved')
      // })
      res.redirect('/users/profile')
    })
    .catch(error => {
      console.error({message:"Error occured while executing /signup", arguments: arguments});
      throw error
    })
  })

router.get('/login',(req, res) => {
  res.render('login')
});

router.post('/new/login', (req,res) => {
  const {email, password} = req.body
  console.log(email, password);
  auth.findByEmail(email,password)
  .then(newUser => {
    console.log('findByEmail',newUser);
    const message ="Incorrect user email or password"
    if(!newUser) res.render('signup', {message})
    return verifyPasswordWithEmail(newUser, password)
  })
  .then(isUser => {
    console.log("isUser", isUser)
    if(!isUser) res.render('signup')
    createSession(req.session, isUser)
    req.session.user = isUser
console.log("new user sfsadfdasf", req.session);
    res.redirect('/users/profile')
  })
  .catch(error => {
  console.error({ message:error});
  // throw error
  });
})

router.get('/logout', (req,res,next) => {
  if(req.session.user) {
    req.session.user = ''
    req.user= ''
    res.redirect('/')
    // req.session.destroy((error) => {
    //   if(error){
    //     return next(error);
    //   }else{
    //     return res.redirect('/')
    //   }
    // })
  }
})

function verifyPasswordWithEmail(newUser, plainPassword) {
  return new Promise((resolve, reject) => {
    if (!newUser) return reject(false)

    bcrypt.compare(plainPassword, newUser.password, (error, doesMatch) => {
      if (error) return reject({ message:'Error occured while executing verifyPasswordWithEmail func', arguments: arguments})
      // console.log(doesMatch);
      resolve(doesMatch ? newUser : false)
    })
  })
}
module.exports = router
