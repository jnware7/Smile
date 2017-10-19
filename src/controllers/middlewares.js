const addUserToRequest = (req, res, next) => {
  req.user = req.session.user
  console.log('used middlewares', req.session.user)
  next();
};

module.exports = {addUserToRequest}
