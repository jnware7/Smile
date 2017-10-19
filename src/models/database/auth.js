const db = require('./connection');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const create = (name,email, password) => {
  return bcrypt.compare(password, hash)
  .then((hash) => {
    return db.query('INSERT INTO users (name, email, password) VALUES($1,$2, $3) RETURNING *'
  ,[name, email ,hash])
}).catch(error => {
  console.error({message:"Error occured while executing users.create", arguments: arguments});
  throw error
  })
}

const findByEmail = (email) => {
  return db.any('SELECT * FROM users WHERE email =$1',[email])
  .catch(error => {
    console.error({message:"Error occured while executing users.findByEmail", arguments: arguments});
    throw error
    })
}

// .catch(error => {
//   console.error({message:"Error occured while executing users.create", arguments: arguments});
//   throw error
//   })
