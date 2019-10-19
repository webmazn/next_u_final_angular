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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const SECRET_KEY = 'nextuSecret2019';
class UsuariosController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = {
                email: req.body.email,
                clave: bcryptjs_1.default.hashSync(req.body.clave),
                nombre: req.body.nombre,
                fec_nacimiento: req.body.fec_nacimiento //1986-01-07
            };
            const result = yield database_1.default.query('INSERT INTO nu_usuarios set ?', [newUser], (error, results, fields) => {
                console.log('entramos...');
                //console.log(error);
                //console.log(error.errno);
                //console.log(results);
                //console.log(results.insertId);
                //console.log(results['insertId']);
                if (error && error.errno === 1062)
                    return res.status(409).send('El email ya existe');
                if (error)
                    return res.status(500).send('Server error');
                const expiresIn = 24 * 60 * 60;
                const accessToken = jsonwebtoken_1.default.sign({ id: results.insertId }, SECRET_KEY, {
                    expiresIn: expiresIn
                });
                const dataUser = {
                    name: newUser.nombre,
                    email: newUser.email,
                    accessToken: accessToken,
                    expiresIn: expiresIn
                };
                // response
                res.send({ dataUser });
            });
            //console.log(result.sql);
        });
    }
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = {
                email: req.body.email,
                clave: req.body.clave
            };
            const usuario = yield database_1.default.query('SELECT id, email, clave, nombre FROM nu_usuarios WHERE email = ?', [userData.email], (error, results, fields) => {
                let rows = results[0];
                if (error)
                    return res.status(500).send('Server error');
                //console.log(results);
                //console.log(results.length);
                //console.log(rows.clave);
                if (results.length > 0) {
                    //console.log('Validaremos clave');
                    const resultPassword = bcryptjs_1.default.compareSync(userData.clave, rows.clave);
                    if (resultPassword) {
                        const expiresIn = 24 * 60 * 60;
                        const accessToken = jsonwebtoken_1.default.sign({ id: rows.id }, SECRET_KEY, { expiresIn: expiresIn });
                        const dataUser = {
                            name: rows.nombre,
                            email: rows.email,
                            accessToken: accessToken,
                            expiresIn: expiresIn
                        };
                        res.send({ dataUser });
                    }
                    else {
                        res.status(409).send({ message: 'La clave es incorrecta' });
                    }
                }
                else {
                    res.status(409).send({ message: 'El correo no está registrado' });
                }
                //res.status(404).json({ text: "The game doesn't exits" });
            });
        });
    }
}
const usuariosController = new UsuariosController;
exports.default = usuariosController;
