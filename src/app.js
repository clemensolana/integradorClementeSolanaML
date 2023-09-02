/* PATH */

const path = require('path');

/* EXPRESS */

const express = require('express');
const app = express();
const router = express.Router();
const mainRoutes = require('./routes/mainRoutes');

const routesProducts = require('./routes/mainRoutes.js');
const productsController = require('./controllers/mainController.js');

/* CREO PUERTO */

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("El servidor se ha iniciado correctamente en el puerto: " + 
    PORT +", bienvenido/a.");
});

/* EJS */

app.set('view engine', 'ejs');

/* APPS USE */

app.use(express.static('./public'));
app.use('/', mainRoutes);