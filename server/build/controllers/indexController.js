"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'My custom API' });
    }
}
exports.indexController = new IndexController;
