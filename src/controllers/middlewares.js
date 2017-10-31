const addUserToRequest = (req, res, next) => {
  console.log('Session?', req.session);
  req.user = req.session.user;

  console.log('used middlewares', req.session.user);
  next();
};

module.exports = {addUserToRequest};
