import { Request, Response } from 'express';
import pool from '../database';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';

class UsuariosController {

  public async createUser(req: Request, res: Response): Promise<any> {
    const SECRET_KEY = 'nextuSecret2019';
    const result = await pool.query('INSERT INTO nu_usuarios set ?', [req.body], (error, results, fields) => {
      //if (error) throw error;
      console.log('entramos...')
      //console.log(results);
      //console.log(results.insertId);
      //console.log(results['insertId']);
      //if (err && err.code === 11000) return res.status(409).send('Email already exists');
      if (error) return res.status(500).send('Server error');
      const expiresIn = 24 * 60 * 60;
      const accessToken = jwt.sign({ id: results.insertId},
      SECRET_KEY, {
        expiresIn: expiresIn
      });
      const dataUser = {
        name: req.body.name,
        email: req.body.email,
        accessToken: accessToken,
        expiresIn: expiresIn
      }
      // response
      res.send({ dataUser });
    });
    //console.log(result.sql);
  }
}

const usuariosController = new UsuariosController;
export default usuariosController;
