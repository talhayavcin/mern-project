const express = require('express');
const router = express.Router();
const { userRegister, loginUser, getMe } = require('../controller/userController');

router.post('/', userRegister);
router.post('/login', loginUser);
router.get('/me', getMe);

module.exports = router;