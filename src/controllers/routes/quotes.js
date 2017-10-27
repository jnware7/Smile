const router = require('express').Router();
const quotes = require('../../models/quotes')

router.post('/likes/:quoteId', (req, res) => {
  const { id } = req.session.user
  const { quoteId } = req.params
    res.locals.userid = req.session.user.id
  quotes
    .like(id, quote_id)
    .then(() => res.json({message: 'Successful Like'}))
    .catch(error => {
      console.log('ERROR :: =>', error);

      res
        .status(500)
        .json({message: error.message})
    })
})

module.exports = router
