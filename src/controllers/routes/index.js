const router = require('express').Router();
const auth = require('./auth');

router.get('/', (req, res) => {
  res.render('home')
})

router.use('/auth', auth)
module.exports = router
