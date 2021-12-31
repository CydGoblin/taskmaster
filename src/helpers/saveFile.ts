import { writeFileSync } from "fs";

export const saveDB = (data: string) => {
  writeFileSync("db/db.data.json", data);
};
