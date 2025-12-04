const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/user', UserController.showRegisterPage);

router.post('/api/users/register', UserController.register);
router.post('/api/users/login', UserController.login);
router.get('/logout', UserController.logout);

module.exports = router;
