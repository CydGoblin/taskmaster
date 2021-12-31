import { existsSync, readFileSync, writeFileSync } from "fs";
import { TaskEntity } from "models/Task";

// TODO: podria esto ser un clase?

const dbPath = "db/db.data.json";

export const saveDB = (data: string) => {
  writeFileSync(dbPath, data);
};

export const readDB = (): TaskEntity[] | null => {
  if (!existsSync(dbPath)) {
    return null;
  } else {
    return JSON.parse(readFileSync(dbPath, { encoding: "utf-8" }));
  }
};
