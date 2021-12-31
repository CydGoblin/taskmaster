import { writeFileSync } from "fs";

export const saveDB = (data: string) => {
  writeFileSync("/db.data.txt", data);
};
