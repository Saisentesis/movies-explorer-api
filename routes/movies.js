const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getMovies, addMovie, deleteMovie,
} = require('../controllers/movies');

router.get('', getMovies);

router.delete('/:movieId', celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required().hex().length(24),
  }),
}), deleteMovie);

router.post('', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().uri().required(),
    trailerLink: Joi.string().uri().required(),
    thumbnail: Joi.string().uri().required(),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
}), addMovie);

module.exports = router;
