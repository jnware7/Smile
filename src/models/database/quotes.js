const db = require('./connection');

const create = (users_id, author,quote) => {
  return db.oneOrNone('INSERT INTO quote (users_id, author, quote) VALUES ($1, $2, $3) RETURNING *',[users_id, author, quote]);
};
const deleteQuote = (id) => {
  return db.none('DELETE quote WHERE id=$1 RETURNING *',[id]);
};

const getByUserId = (users_id) => {
  return db.any('SELECT * FROM quote WHERE users_id=$1',[users_id]);
};

const getAll = () => {
  return db.any('SELECT * FROM quote');
};

const getUserFav = (users_id) => {
  return db.any('SELECT * FROM quote WHERE users_id=$1 AND likes=true',[users_id]);
};

const like = (users_id,id) => {
  return db.one('UPDATE quote SET (likes) = (true) WHERE users_id=$1 and id=$2 ',[users_id,id]);
};
module.exports ={
  create,
  deleteQuote,
  getByUserId,
  getAll,
  getUserFav,
  like
};
