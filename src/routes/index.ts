import { Router } from 'express';
import { IndexController } from '../controllers';
import taskRoutes from './taskRoutes';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app: Router) {
  app.get('/', indexController.getIndex.bind(indexController));
  app.use('/api', taskRoutes);
}

export default router;
