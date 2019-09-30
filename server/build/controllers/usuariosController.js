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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UsuariosController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const SECRET_KEY = 'nextuSecret2019';
            const result = yield database_1.default.query('INSERT INTO nu_usuarios set ?', [req.body], (error, results, fields) => {
                //if (error) throw error;
                console.log('entramos...');
                //console.log(results);
                //console.log(results.insertId);
                //console.log(results['insertId']);
                //if (err && err.code === 11000) return res.status(409).send('Email already exists');
                if (error)
                    return res.status(500).send('Server error');
                const expiresIn = 24 * 60 * 60;
                const accessToken = jsonwebtoken_1.default.sign({ id: results.insertId }, SECRET_KEY, {
                    expiresIn: expiresIn
                });
                const dataUser = {
                    name: req.body.name,
                    email: req.body.email,
                    accessToken: accessToken,
                    expiresIn: expiresIn
                };
                // response
                res.send({ dataUser });
            });
            //console.log(result.sql);
        });
    }
}
const usuariosController = new UsuariosController;
exports.default = usuariosController;
