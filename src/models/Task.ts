import { v4 as uuidv4 } from "uuid";

export interface TaskEntity {
  id: string;
  desc: string;
  // created: Date;
  completed: Date | null;
  markComplete: () => void;
  markIncomple: () => void;
}

export class Task implements TaskEntity {
  id: string;
  desc: string;
  // created: Date;
  completed: Date | null;

  constructor(desc: string, id = uuidv4(), completed = null) {
    this.id = id;
    this.desc = desc;
    this.completed = completed;
  }

  markComplete() {
    this.completed = null;
  }

  markIncomple() {
    this.completed = new Date();
  }
}
