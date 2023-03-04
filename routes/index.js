const router = require('express').Router();
const NotFoundError = require('../errors/NotFound');
const auth = require('../middlewares/auth');
const authRouter = require('./auth');
const usersRouter = require('./users');
const moviesRouter = require('./movies');

router.use('', authRouter);
router.use(auth);
router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.use('*', (req, res, next) => next(new NotFoundError('Неправильный путь')));

module.exports = router;
