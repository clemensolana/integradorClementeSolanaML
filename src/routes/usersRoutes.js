const express = require('express');

const usersRouter = express.Router();
const usersController = require('../controllers/usersController.js');

usersRouter.get('/register', usersController.register);
usersRouter.get('/login', usersController.login);

/* para listar los usuarios del sistema */

// usersRouter.get('/list', mainController.list);

// usersRouter.get('/search', mainController.search);

module.exports = usersRouter;

// register: (req, res) => {
//   return res.render('register');
// },
// login: (req, res) => {
//   return res.render('login');
// },
// list: function (req, res) {
//   let users = ['Dario', 'Javier', 'Maru', 'Ale', 'Clemente', 'Nerea', 'Tony'];

//   res.render('userList', { users: users });
//   /* para compartirlo con el archivo userList.ejs tengo que agregar
//       un segundo parámetro en el método render que sea un objeto
//       literal aclarando las variables que yo tengo en el controlador
//       y que quiero compartir con la vista, como por ejemplo "users"
//       al ser un objeto literal tendremos que darle un valor
//       indentificatorio en este ejemplo "users" este
//       nombre debe respetarse cuando lo lleve a la vista, es buena prá
//       ctica que lleve el mismo nombre de la variable */
// },
// search: (req, res) => {
//   let loQueBuscoElUsuario = req.query.query;
//   res.send(loQueBuscoElUsuario);
// },
