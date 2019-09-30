"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class ProductosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /*const games = await pool.query('SELECT * FROM games');
            res.json(games);*/
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /*const { id } = req.params;
            const games = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The game doesn't exits" });*/
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /*const result = await pool.query('INSERT INTO games set ?', [req.body]);
            res.json({ message: 'Game Saved' });*/
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /*const { id } = req.params;
            const oldGame = req.body;
            await pool.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
            res.json({ message: "The game was Updated" });*/
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /*const { id } = req.params;
            await pool.query('DELETE FROM games WHERE id = ?', [id]);
            res.json({ message: "The game was deleted" });*/
        });
    }
}
const productosController = new ProductosController;
exports.default = productosController;
