const express = require('express');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../public/images/profilePictures'));
  },
  filename: (req, file, cb) => {
    console.log(file);
    const newFileName =
      'profilePicture-' + Date.now() + path.extname(file.originalname);
    cb(null, newFileName);
  },
});

const upload = multer({ storage: storage });

const usersRouter = express.Router();
const usersController = require('../controllers/usersController.js');

usersRouter.get('/register', usersController.register);

usersRouter.post(
  '/register',
  upload.single('profilePicture'),
  usersController.create
);

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
