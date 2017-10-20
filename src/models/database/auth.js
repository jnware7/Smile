const db = require('./connection');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const create = (name,email, password) => {
  return bcrypt.hash(password, saltRounds)
  .then(hash => {
    db.query('INSERT INTO users (name, email, password) VALUES($1, $2, $3)'
  ,[name, email , hash])
}).catch(error => {
  console.error({message:"Error occured while executing auth.create", arguments: arguments});
  throw error
  })
}

const findByEmail = (email) => {
  return db.oneOrNone('SELECT * FROM users WHERE email = $1',[email])
  .then(user => console.log(user))
  .catch(error => {
    console.error({message:"Error occured while executing auth.findByEmail", arguments: arguments});
    throw error
    })
}

// .catch(error => {
//   console.error({message:"Error occured while executing users.create", arguments: arguments});
//   throw error
//   })

module.exports = {
  create,
  findByEmail
}
