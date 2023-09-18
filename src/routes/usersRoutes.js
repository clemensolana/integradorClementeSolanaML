const express = require('express');

const usersRouter = express.Router();
const usersController = require('../controllers/usersController.js');

usersRouter.get('/register', usersController.register);

usersRouter.post('/register', usersController.create);

usersRouter.get('/login', usersController.login);

usersRouter.get('/list', usersController.list);

usersRouter.get('/search', usersController.search);

usersRouter.get('/detail', usersController.search);

usersRouter.get('/edit/:idUser', usersController.edit);

usersRouter.put('/edit', function (req, res) {
  res.send('Fui por put');
});

usersRouter.delete('/delete/:idUser', function (req, res) {
  res.send('Fui por delete');
});

module.exports = usersRouter;
