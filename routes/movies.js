const router = require('express').Router();
const { movieDeleteConfig, addMovieConfig } = require('../utils/validationConfig');

const {
  getMovies, addMovie, deleteMovie,
} = require('../controllers/movies');

router.get('', getMovies);
router.delete('/:movieId', movieDeleteConfig, deleteMovie);
router.post('', addMovieConfig, addMovie);

module.exports = router;
