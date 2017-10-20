const db = require('./database/auth')


module.exports = {
  create: db.create,
  findByEmail: db.findByEmail
}
