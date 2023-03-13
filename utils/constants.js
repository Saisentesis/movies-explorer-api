const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

const BadRequest = 400;
const Unauthorized = 401;
const Forbidden = 403;
const NotFound = 404;
const Conflict = 409;

const BadRequestMessage = 'Переданы некорректные данные';
const UnauthorizedMessage = 'Необходима авторизация';
const ForbiddenMessage = 'Удалять можно только свои фильмы';
const UserNotFoundMessage = 'Пользователь по указанному _id не найден.';
const MovieNotFoundMessage = 'Фильм с указанным _id не найден.';
const ConflictMessage = 'Пользователь с таким email уже существует';
const PageNotFoundMessage = 'Неправильный путь';

module.exports = {
  BadRequest,
  Unauthorized,
  Forbidden,
  NotFound,
  Conflict,
  limiter,
  BadRequestMessage,
  UnauthorizedMessage,
  ForbiddenMessage,
  UserNotFoundMessage,
  MovieNotFoundMessage,
  ConflictMessage,
  PageNotFoundMessage,
};
