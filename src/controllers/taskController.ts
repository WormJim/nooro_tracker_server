import prisma from '../lib/prisma';
import { Request, Response } from '../types';

enum TaskColor {
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue',
  YELLOW = 'yellow',
  ORANGE = 'orange',
  PURPLE = 'purple',
  PINK = 'pink',
  BROWN = 'brown',
  BLACK = 'black',
  WHITE = 'white',
}

interface Task {
  id: number;
  title: string;
  completed: boolean;
  color: TaskColor;
  createdAt: Date;
  updatedAt: Date;
}

export class TaskController {
  public async getTasks(req: Request, res: Response): Promise<void> {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
  }

  public async getTask(req: Request, res: Response): Promise<void> {
    const taskId = parseInt(req.params.id, 10);
    const task = await prisma.task.findUnique({
      where: { id: taskId },
    });
    if (!task) {
      res.status(404).send('Task not found');
      return;
    }
    res.json(task);
  }

  public async createTask(req: Request, res: Response): Promise<void> {
    const { title, color } = req.body;
    const newTask = await prisma.task.create({
      data: {
        title,
        color,
      },
    });
    res.status(201).json(newTask);
  }

  public async updateTask(req: Request, res: Response): Promise<void> {
    const taskId = parseInt(req.params.id, 10);
    const { title, completed, color, description } = req.body;
    const updatedTask = await prisma.task.update({
      where: { id: taskId },
      data: {
        title,
        color,
        completed,
        completedAt:
          completed === undefined || completed === null
            ? undefined
            : completed
              ? new Date()
              : null,
        description,
      },
    });
    res.json(updatedTask);
  }

  public async deleteTask(req: Request, res: Response): Promise<void> {
    const taskId = parseInt(req.params.id, 10);
    await prisma.task.delete({
      where: { id: taskId },
    });
    res.status(204).send();
  }
}
