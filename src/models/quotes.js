const db = require('./database/quotes')

module.exports = {
  create: db.create,
  deleteQuote: db.deleteQuote,
  getByUserId: db.getByUserId,
  getAll: db.getAll,
  getUserFav: db.getUserFav,
  quote:db.quote
}
