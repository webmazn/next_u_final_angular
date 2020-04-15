import { Request, Response } from 'express';
import pool from '../database';

class ProductosController {

  public async mostrarProductos(req: Request, res: Response): Promise<any> {
    /*const { id } = req.params;
    const games = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
    console.log(games.length);
    if (games.length > 0) {
        return res.json(games[0]);
    }
    res.status(404).json({ text: "The game doesn't exits" });*/
  }

  public async buscarProducto(req: Request, res: Response): Promise<any> {
    /*const { id } = req.params;
    const games = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
    console.log(games.length);
    if (games.length > 0) {
        return res.json(games[0]);
    }
    res.status(404).json({ text: "The game doesn't exits" });*/
  }

  public async actualizarDisponibles(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const { disponible } = req.params;
    await pool.query('UPDATE nu_productos set disponibles = ? WHERE id = ?', [disponible, id]);
    res.json({ message: "The game was Updated" });
  }

  public async listarProductos(req: Request, res: Response): Promise<void> {
    /*const games = await pool.query('SELECT * FROM games');
    res.json(games);*/
    await pool.query('SELECT id, nombre, precio, disponibles, imagen FROM nu_productos', [], (error, results, fields) => {
      if (error) return res.status(500).send('Server error');
      //console.log(results);
      //console.log(results.length);
      //console.log(rows.clave);
      if (results.length > 0) {
        res.json(results);
      }else{
        res.status(409).send({ message: 'No hay producto' });
      }
      //res.status(404).json({ text: "The game doesn't exits" });
    });
  }

  public async traerUnProducto(req: Request, res: Response): Promise<any> {
    const { id } = req.params; // obtiene una parte de un objeto sería igual a req.params.id
    const producto = await pool.query('SELECT * FROM nu_productos WHERE id = ?', [id], (error, results, fields) => {
      if (error) return res.status(500).send('Server error');
      //console.log(results);
      //console.log(results.length);
      //console.log(rows.clave);
      if (results.length > 0) {
        return res.json(results[0]);
      }else{
        res.status(404).send({ message: 'No hay producto' });
      }
      //res.status(404).json({ text: "The game doesn't exits" });
    });
  }

  public async createUser(req: Request, res: Response): Promise<void> {
    /*const result = await pool.query('INSERT INTO games set ?', [req.body]);
    res.json({ message: 'Game Saved' });*/
  }

  public async update(req: Request, res: Response): Promise<void> {
    /*const { id } = req.params;
    const oldGame = req.body;
    await pool.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
    res.json({ message: "The game was Updated" });*/
  }

  public async delete(req: Request, res: Response): Promise<void> {
    /*const { id } = req.params;
    await pool.query('DELETE FROM games WHERE id = ?', [id]);
    res.json({ message: "The game was deleted" });*/
  }
}

const productosController = new ProductosController;
export default productosController;
