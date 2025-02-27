import { Request, Response } from '../types';

export class IndexController {
  public getIndex(req: Request, res: Response): void {
    res.send('Welcome to the Nooro Task Tracker API!');
  }
}
