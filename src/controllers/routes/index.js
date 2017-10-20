const router = require('express').Router();
const auth = require('./auth');
const users = require('./users');

router.get('/', (req, res) => {
  res.render('home')
})

router.use('/auth', auth)
router.use('/users',users)
module.exports = router
