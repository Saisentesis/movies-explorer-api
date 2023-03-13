const router = require('express').Router();
const { updateUserConfig } = require('../utils/validationConfig');

const { getUser, updateUser } = require('../controllers/users');

router.get('/me', getUser);
router.patch('/me', updateUserConfig, updateUser);

module.exports = router;
