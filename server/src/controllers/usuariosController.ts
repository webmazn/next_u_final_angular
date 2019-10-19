import { Request, Response } from 'express';
import pool from '../database';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const SECRET_KEY = 'nextuSecret2019'

class UsuariosController {

  public async createUser(req: Request, res: Response): Promise<any> {
    const newUser = {
      email: req.body.email, //maycol_630@hotmail.com
      clave: bcrypt.hashSync(req.body.clave), //clave01
      nombre: req.body.nombre, //Maycol Zambrano Nuñez
      fec_nacimiento: req.body.fec_nacimiento //1986-01-07
    }
    const result = await pool.query('INSERT INTO nu_usuarios set ?', [newUser], (error, results, fields) => {
      console.log('entramos...')
      //console.log(error);
      //console.log(error.errno);
      //console.log(results);
      //console.log(results.insertId);
      //console.log(results['insertId']);
      if (error && error.errno === 1062) return res.status(409).send('El email ya existe');
      if (error) return res.status(500).send('Server error');
      const expiresIn = 24 * 60 * 60;
      const accessToken = jwt.sign({ id: results.insertId},
      SECRET_KEY, {
        expiresIn: expiresIn
      });
      const dataUser = {
        name: newUser.nombre,
        email: newUser.email,
        accessToken: accessToken,
        expiresIn: expiresIn
      }
      // response
      res.send({ dataUser });
    });
    //console.log(result.sql);
  }

  public async loginUser(req: Request, res: Response): Promise<any> {
    const userData = {
      email: req.body.email,
      clave: req.body.clave
    }
    const usuario = await pool.query('SELECT id, email, clave, nombre FROM nu_usuarios WHERE email = ?', [userData.email], (error, results, fields) => {
      let rows = results[0];
      if (error) return res.status(500).send('Server error');
      //console.log(results);
      //console.log(results.length);
      //console.log(rows.clave);
      if (results.length > 0) {
        //console.log('Validaremos clave');
        const resultPassword = bcrypt.compareSync(userData.clave, rows.clave);
        if (resultPassword) {
          const expiresIn = 24 * 60 * 60;
          const accessToken = jwt.sign({ id: rows.id }, SECRET_KEY, { expiresIn: expiresIn });

          const dataUser = {
            name: rows.nombre,
            email: rows.email,
            accessToken: accessToken,
            expiresIn: expiresIn
          }
          res.send({ dataUser });
        } else {
          res.status(409).send({ message: 'La clave es incorrecta' });
        }
      }else{
        res.status(409).send({ message: 'El correo no está registrado' });
      }
      //res.status(404).json({ text: "The game doesn't exits" });
    });
  }
}

const usuariosController = new UsuariosController;
export default usuariosController;
