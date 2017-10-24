const db = require('./connection');

const findById = (id)=> {
  return db.oneOrNone('SELECT * FROM users WHERE id=$1')
  .catch(error => {
    console.error({message:"Error occured while executing users.findByUserId", arguments: arguments});
    throw error
    })
}

module.exports ={
  findById
}
