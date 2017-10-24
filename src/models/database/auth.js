const db = require('./connection');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const create = (name,email, password) => {
  console.log('INSIDE ', name, email, password)
  return bcrypt.hash(password, saltRounds)
    // .then(hash => { console.log("Hash result: ", hash)})
    // .catch(err => { console.log("Hash error: ", err)})
  .then(hash => {
    console.log("inside database call");
    return db.oneOrNone('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *'
      ,[name, email , hash])
})
.then(result => {
  // console.log("database result: ", result)
  return result
})
.catch(error => {
  console.error({message:"Error occured while executing auth.create", arguments: arguments});
  throw error
  })
}
//
// create('jeff','jeff@me.com','jeff')

const findByEmail = (email) => {
  return db.oneOrNone('SELECT * FROM users WHERE email = $1',[email])
  .then(user => user)
  .catch(error => {
    console.error({message:"Error occured while executing auth.findByEmail", arguments: arguments});
    throw error
    })
}
findByEmail('true@me.com')

// .catch(error => {
//   console.error({message:"Error occured while executing users.create", arguments: arguments});
//   throw error
//   })

module.exports = {
  create,
  findByEmail
}
