import { TaskController } from './taskController';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from '../types';
import prismaMock from '../lib/__mocks__/prisma';

const taskController = new TaskController();

describe('TaskController', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  const task = {
    id: 1,
    title: 'Task 1',
    color: 'black',
    completed: false,
    description: null,
    completedAt: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(() => {
    req = {};
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getTasks', () => {
    it('should retrieve all tasks', async () => {
      prismaMock.task.findMany.mockResolvedValue([task]);

      await taskController.getTasks(req as Request, res as Response);

      expect(prismaMock.task.findMany).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith([task]);
    });
  });

  describe('getTask', () => {
    it('should retrieve a task by ID', async () => {
      req.params = { id: '1' };
      prismaMock.task.findUnique.mockResolvedValue(task);

      await taskController.getTask(req as Request, res as Response);

      expect(prismaMock.task.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
      expect(res.json).toHaveBeenCalledWith(task);
    });

    it('should return 404 if task not found', async () => {
      req.params = { id: '1' };
      prismaMock.task.findUnique.mockResolvedValue(null);

      await taskController.getTask(req as Request, res as Response);

      expect(prismaMock.task.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith('Task not found');
    });
  });

  describe('createTask', () => {
    it('should create a new task', async () => {
      req.body = { title: 'Task 1', color: 'red' };
      prismaMock.task.create.mockResolvedValue(task);

      await taskController.createTask(req as Request, res as Response);

      expect(prismaMock.task.create).toHaveBeenCalledWith({
        data: { title: 'Task 1', color: 'red' },
      });
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(task);
    });
  });

  describe('updateTask', () => {
    it('should update a task by ID', async () => {
      const updatedTask = {
        ...task,
        id: 1,
        title: 'Updated Task',
        completed: true,
        color: 'green',
        completedAt: new Date(),
      };
      req.params = { id: '1' };
      req.body = { title: 'Updated Task', completed: true, color: 'green' };
      prismaMock.task.update.mockResolvedValue(updatedTask);

      await taskController.updateTask(req as Request, res as Response);

      expect(prismaMock.task.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: {
          title: 'Updated Task',
          color: 'green',
          completed: true,
          completedAt: expect.any(Date),
        },
      });
      expect(res.json).toHaveBeenCalledWith(updatedTask);
    });
  });

  describe('deleteTask', () => {
    it('should delete a task by ID', async () => {
      req.params = { id: '1' };
      prismaMock.task.delete.mockResolvedValue(task);

      await taskController.deleteTask(req as Request, res as Response);

      expect(prismaMock.task.delete).toHaveBeenCalledWith({ where: { id: 1 } });
      expect(res.status).toHaveBeenCalledWith(204);
      expect(res.send).toHaveBeenCalled();
    });
  });
});
