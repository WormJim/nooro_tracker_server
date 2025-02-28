import { Router } from 'express';
import { IndexController } from '../controllers';
import taskRoutes from './taskRoutes';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app: Router) {
  app.get('/', indexController.getIndex.bind(indexController));
  app.use('/api', taskRoutes);
  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
  });
}

export default router;
