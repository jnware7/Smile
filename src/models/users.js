const db = require('./database/users')

module.exports = {
  findById: db.findById
}
