const router = require('express').Router();
const { createUser, login } = require('../controllers/users');
const { userRegisterConfig, userLoginConfig } = require('../utils/validationConfig');

router.post('/signup', userRegisterConfig, createUser);
router.post('/signin', userLoginConfig, login);

module.exports = router;
