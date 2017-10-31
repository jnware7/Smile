const db = require('./connection');

const update = (name, image, id) => {
  return db.one('UPDATE users SET (name, image) = ($1,$2) WHERE id=$3 RETURNING *',[name, image, id]);
};
const findById = (id)=> {
  return db.oneOrNone('SELECT * FROM users WHERE id=$1', [id])
    .catch(error => {
      console.error({message:'Error occured while executing users.findByUserId', arguments: arguments});
      throw error;
    });
};

module.exports ={
  findById,
  update
};
