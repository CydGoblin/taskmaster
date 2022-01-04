import { existsSync, readFileSync, writeFileSync } from "fs";
import { TaskEntity } from "models/Task";

export class Storage {
  dbPath: string;

  constructor() {
    this.dbPath = "db/data.json";
  }

  saveDB = (data: string) => {
    writeFileSync(this.dbPath, data);
  };

  readDB = (): TaskEntity[] | null => {
    if (!existsSync(this.dbPath)) {
      return null;
    } else {
      return JSON.parse(readFileSync(this.dbPath, { encoding: "utf-8" }));
    }
  };
}
