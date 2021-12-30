import { Task, TaskEntity } from "./Task";

interface TaskListEntity {
  [id: string]: TaskEntity;
}

export class Tasks {
  _list: TaskListEntity | {} = {};

  constructor() {
    this._list = {};
  }

  createTask(desc: string) {
    const task = new Task(desc);
    // console.log({`${task.id}`: 'OK'});
    (this._list as TaskListEntity)[task.id] = task;
  }
}
