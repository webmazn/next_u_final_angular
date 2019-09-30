import { Request, Response } from 'express';

class IndexController {
  public index(req: Request, res: Response) {
    res.json({text: 'My custom API'});
  }
}
export const indexController = new IndexController;
