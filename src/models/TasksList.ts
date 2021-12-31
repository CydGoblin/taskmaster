import { Task, TaskEntity } from "./Task";

interface TaskListEntity {
  [key: string]: TaskEntity;
}

export class TasksList {
  private _list: TaskListEntity;

  constructor() {
    this._list = {};
  }

  get listTasks() {
    return this._list;
  }

  createTask(desc: string) {
    const task = new Task(desc);
    this._list[task.id] = task;
  }
}
