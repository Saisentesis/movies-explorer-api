const jwt = require('jsonwebtoken');
const config = require('../utils/config');
const UnauthorizedError = require('../errors/Unauthorized');
const { UnauthorizedMessage } = require('../utils/constants');

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new UnauthorizedError(UnauthorizedMessage);
    }

    const token = authorization.replace('Bearer ', '');
    req.user = jwt.verify(token, config.JWT_SECRET);
  } catch (err) {
    next(new UnauthorizedError(UnauthorizedMessage));
  }

  next();
};
