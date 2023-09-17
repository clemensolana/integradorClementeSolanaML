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

    let users = [
      { id: 1, name: 'Clemente' },
      { id: 2, name: 'Nerea' },
      { id: 3, name: 'Tony' },
      { id: 4, name: 'Jorge' },
      { id: 5, name: 'Ignacio' },
    ];

    let usersResults = [];

    for (let i = 0; i < users.length; i++) {
      if (users[i].name.includes(loQueBuscoElUsuario)) {
        usersResults.push(users[i]);
      }
    }

    res.render('userResults', { usersResults: usersResults });

    return res.send(loQueBuscoElUsuario);
  },
  list: function (req, res) {
    let users = [
      { id: 1, name: 'Clemente' },
      { id: 2, name: 'Nerea' },
      { id: 3, name: 'Tony' },
      { id: 4, name: 'Jorge' },
      { id: 5, name: 'Ignacio' },
    ];

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
    console.log(req.body);
    res.send(req.body);
  },
};

module.exports = usersController;
