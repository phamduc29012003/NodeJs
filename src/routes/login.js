const express = require('express');
const router = express.Router();

const LoginController = require('../app/controllers/LoginController');

router.get('/log-in', LoginController.login);
router.post('/newAcc',LoginController.newAcc)


module.exports = router;