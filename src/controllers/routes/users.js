const router = require('express').Router();
const users = require('../../models/users')

router.get('/profile', (req, res) => {
  console.log("locls var", res.locals.isLoggedIn)
 const user = req.session.user
 console.log('(2) user333====>', user);
  const name = req.user.name
  const userImage = req.user.image
console.log('name', name);
  res.render('profile',{name:name, image: userImage})
});
module.exports = router
