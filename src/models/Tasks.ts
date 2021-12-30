import { Task, TaskEntity } from "./Task";

interface TaskListEntity {
  [key: string]: TaskEntity;
}

export class Tasks {
  private _list: TaskListEntity | {} = {};

  get listTasks() {
    return this._list;
  }

  createTask(desc: string) {
    const task = new Task(desc);
    (this._list as TaskListEntity)[task.id] = task;
  }
}
