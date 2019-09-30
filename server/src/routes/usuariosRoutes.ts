import express, { Router } from 'express';
import usuariosController from '../controllers/usuariosController';

class UsuariosRoutes {

  router: Router = Router();
  constructor(){
    this.config();
  }
  config(){
    //this.router.post('/login', usuariosController.loginUser);
    this.router.post('/register', usuariosController.createUser);
  }
}

export default new UsuariosRoutes().router;
