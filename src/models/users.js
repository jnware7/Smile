const db = require('./database/users');

module.exports = {
  findById: db.findById,
  update: db.update
};
