const router = require('express').Router();
const quotes = require('../../models/quotes')

router.put('/likes/:quote_id', (req, res) => {

const users_id = req.session.user.id
const quote_id = req.params.quote_id

quotes.like(users_id, quote_id)
res.redirect('/users/profile')
})

module.exports = router
