import { v4 as uuidv4 } from "uuid";

export interface TaskEntity {
  id: string;
  desc: string;
  completed: Date | null;
  markComplete: () => void;
  markIncomple: () => void;
}

export class Task implements TaskEntity {
  id: string;
  desc: string;
  completed: Date | null;

  constructor(
    desc: string,
    id: string = uuidv4(),
    completed: Date | null = null
  ) {
    this.id = id;
    this.desc = desc;
    this.completed = completed;
  }

  markComplete() {
    this.completed = new Date();
  }

  markIncomple() {
    this.completed = null;
  }
}
