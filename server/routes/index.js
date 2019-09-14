const { Router } = require('express'),
  router = Router(),
  UsersController = require('../controllers/usuarios-controller');

router
  .get('/defaultUser', UsersController.defaultUser)
  .post('/login', UsersController.login)
  .post('/logout', UsersController.logout)

module.exports=router
