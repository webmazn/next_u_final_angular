"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosController_1 = __importDefault(require("../controllers/productosController"));
class ProductosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/productos', productosController_1.default.listarProductos);
        this.router.get('/producto/:id', productosController_1.default.traerUnProducto);
        this.router.put('/producto/:id/:disponible', productosController_1.default.actualizarDisponibles);
        /*this.router.get('/', productosController.list);
        this.router.get('/:id', productosController.getOne);
        this.router.post('/', productosController.create);
        this.router.delete('/:id', productosController.delete);*/
    }
}
exports.default = new ProductosRoutes().router;
