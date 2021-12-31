import { Task, TaskEntity } from "./Task";

interface TaskListEntity {
  [key: string]: TaskEntity;
}

export class TasksList {
  private _list: TaskListEntity;

  constructor() {
    this._list = {};
  }

  // get listTasks() {
  //   return Object.keys(this._list).map((key) => {
  //     return this._list[key];
  //   });
  // }

  get toArray() {
    return Object.values(this._list);
  }

  loaddB(tasks: TaskEntity[]) {
    tasks.map((task) => {
      this._list[task.id] = task;
    });
  }

  createTask(desc: string) {
    const task = new Task(desc);
    this._list[task.id] = task;
  }
}
