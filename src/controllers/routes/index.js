const router = require('express').Router();
const auth = require('./auth');
const users = require('./users');

router.get('/', (req, res) => {
  res.render('home')
})
router.use((req, res, next) => {

  if(req.session.user) {
    res.locals.isLoggedIn = true
  } else {
    res.locals.isLoggedIn = false
  }
  console.log('isLoggedIn',res.locals.isLoggedIn);
  next()
});
router.use('/auth', auth)
router.use('/users',users)
module.exports = router
