"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ProductosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        /*this.router.get('/', productosController.list);
        this.router.get('/:id', productosController.getOne);
        this.router.post('/', productosController.create);
        this.router.put('/:id', productosController.update);
        this.router.delete('/:id', productosController.delete);*/
    }
}
exports.default = new ProductosRoutes().router;
