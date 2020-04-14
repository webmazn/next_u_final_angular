import express, { Router } from 'express';
import productosController from '../controllers/productosController';

class ProductosRoutes {

  router: Router = Router();
  constructor(){
    this.config();
  }
  config(){
    this.router.get('/productos', productosController.listarProductos);
    this.router.get('/producto/:id', productosController.traerUnProducto);
    this.router.put('/producto/:id/:disponible', productosController.actualizarDisponibles);
    /*this.router.get('/', productosController.list);
    this.router.get('/:id', productosController.getOne);
    this.router.post('/', productosController.create);
    this.router.delete('/:id', productosController.delete);*/
  }
}

export default new ProductosRoutes().router;
