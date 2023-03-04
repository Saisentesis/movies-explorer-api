const Movie = require('../models/movie');
const BadRequestError = require('../errors/BadRequest');
const NotFoundError = require('../errors/NotFound');
const ForbiddenError = require('../errors/Forbidden');

module.exports.getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .populate(['owner'])
    .then((movies) => res.send(movies))
    .catch((err) => next(err));
};

module.exports.addMovie = (req, res, next) => {
  Movie.create({ ...req.body, owner: req.user._id })
    .then((movie) => movie.populate(['owner']))
    .then((movie) => res.send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные'));
        return;
      }
      next(err);
    });
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError('Фильм с указанным _id не найден.');
      }
      if (req.user._id !== String(movie.owner._id)) {
        throw new ForbiddenError('Удалять можно только свои фильмы');
      }
      return Movie.deleteOne(movie).then(() => res.send(movie));
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Переданы некорректные данные'));
        return;
      }
      next(err);
    });
};
