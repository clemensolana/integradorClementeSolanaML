let fs = require('fs');

const usersController = {
  login: (req, res) => {
    return res.render('login');
  },
  register: (req, res) => {
    return res.render('register');
  },
  // list: (req, res) => {
  //   return res.render('list');
  // },
  search: (req, res) => {
    let loQueBuscoElUsuario = req.query.search;

    let archivoJSON = fs.readFileSync('usuarios.json', { encoding: 'utf-8' });

    let users = JSON.parse(archivoJSON);

    let usersResults = [];

    for (let i = 0; i < users.length; i++) {
      if (users[i].nameAndLastname.includes(loQueBuscoElUsuario)) {
        usersResults.push(users[i]);
      }
    }

    res.render('userResults', { usersResults: usersResults });

    return res.send(loQueBuscoElUsuario);
  },
  list: function (req, res) {
    let archivoJSON = fs.readFileSync('usuarios.json', { encoding: 'utf-8' });

    let users = JSON.parse(archivoJSON);

    res.render('list', { users: users });
    /* para compartirlo con el archivo userList.ejs tengo que agregar
un segundo parámetro en el método render que sea un objeto
literal aclarando las variables que yo tengo en el controlador
y que quiero compartir con la vista, como por ejemplo "users"
al ser un objeto literal tendremos que darle un valor
indentificatorio en este ejemplo "users" este
nombre debe respetarse cuando lo lleve a la vista, es buena prá
tica que lleve el mismo nombre de la variable */
  },
  detail: (req, res) => {
    return res.render('detail');
  },
  create: (req, res) => {
    let usuario = {
      nameAndLastname: req.body.nameAndLastname,
      userName: req.body.userName,
      birthDate: req.body.birthDate,
      homeAdress: req.body.homeAdress,
      profile: req.body.profile,
      preferences: req.body.preferences,
      profilePicture: req.body.profilePicture,
      passW: req.body.passW,
    };

    let archivoUsuario = fs.readFileSync('usuarios.json', {
      encoding: 'utf-8',
    });
    let usuarios;
    if (archivoUsuario == '') {
      usuarios = [];
    } else {
      usuarios = JSON.parse(archivoUsuario);
    }

    usuarios.push(usuario);

    usuariosJSON = JSON.stringify(usuarios);

    fs.writeFileSync('usuarios.json', usuariosJSON);

    res.redirect('/users/list');
  },
  edit: (req, res) => {
    let idUser = req.params.idUser;

    let users = [
      { id: 1, name: 'Clemente' },
      { id: 2, name: 'Nerea' },
      { id: 3, name: 'Tony' },
      { id: 4, name: 'Jorge' },
      { id: 5, name: 'Ignacio' },
    ];

    let userToEdit = users[idUser];

    res.render('edit', { userToEdit: userToEdit });
  },
};

module.exports = usersController;
