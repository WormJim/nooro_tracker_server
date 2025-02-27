import { Request, Response } from "../types";

enum TaskColor {
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
  YELLOW = "yellow",
  ORANGE = "orange",
  PURPLE = "purple",
  PINK = "pink",
  BROWN = "brown",
  BLACK = "black",
  WHITE = "white",
}

interface Task {
  id: number;
  title: string;
  completed: boolean;
  color: TaskColor;
  createdAt: Date;
  updatedAt: Date;
}

let tasks: Task[] = [];

export class TaskController {
  public getTasks(req: Request, res: Response): void {}

  public createTask(req: Request, res: Response): void {}

  public updateTask(req: Request, res: Response): void {}

  public deleteTask(req: Request, res: Response): void {}
}
