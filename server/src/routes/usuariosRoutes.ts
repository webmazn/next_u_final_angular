import express, { Router } from 'express';
import usuariosController from '../controllers/usuariosController';

class UsuariosRoutes {

  router: Router = Router();
  constructor(){
    this.config();
  }
  config(){
    this.router.post('/register', usuariosController.createUser);
    this.router.post('/login', usuariosController.loginUser);
  }
}

export default new UsuariosRoutes().router;
