const express = require('express');

const usersRouter = express.Router();
const usersController = require('../controllers/usersController.js');

usersRouter.get('/register', usersController.register);

usersRouter.post('/register', usersController.create);

usersRouter.get('/login', usersController.login);

usersRouter.get('/list', usersController.list);

usersRouter.get('/search', usersController.search);

usersRouter.get('/detail', usersController.search);

module.exports = usersRouter;
