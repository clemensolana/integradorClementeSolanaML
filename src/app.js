/* PATH */

const path = require('path');

/* EXPRESS */

const express = require('express');
const app = express();

const mainRoutes = require('./routes/mainRoutes');
// const productsRoutes = require('./routes/productsRoutes.js');
const usersRoutes = require('./routes/usersRoutes');

/* CREO PUERTO */

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(
    'El servidor se ha iniciado correctamente en el puerto: ' +
      PORT +
      ', bienvenido/a.'
  );
});

/* EJS */

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

/* APPS USE */

app.use('/', mainRoutes); // Todas las url que comiencen con /, se dirigen al archivo mainRoutes
// app.use('/products', productsRoutes); // Todas las url que comiencen con /products, se dirigen al archivo productsRoutes
app.use('/users', usersRoutes); // Todas las url que comiencen con /users, se dirigen al archivo usersRoutes
app.use(express.static(path.join(__dirname, '../public')));
