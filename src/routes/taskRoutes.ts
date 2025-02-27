import { Router } from 'express';
import { TaskController } from '../controllers/taskController';

const router = Router();
const taskController = new TaskController();

router.get('/tasks', taskController.getTasks.bind(taskController));
router.get('/tasks/:id', taskController.getTask.bind(taskController));
router.post('/tasks', taskController.createTask.bind(taskController));
router.patch('/tasks/:id', taskController.updateTask.bind(taskController));
router.delete('/tasks/:id', taskController.deleteTask.bind(taskController));

export default router;
