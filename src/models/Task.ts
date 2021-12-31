import { v4 as uuidv4 } from "uuid";

export interface TaskEntity {
  id: string;
  desc: string;
  // created: Date;
  completed: Date | null;
}

export class Task implements TaskEntity {
  id: string;
  desc: string;
  // created: Date;
  completed: Date | null;

  constructor(desc: string) {
    this.id = uuidv4();
    this.desc = desc;
    this.completed = null;
  }
}
