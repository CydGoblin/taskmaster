import { inquirerMenu, pause, readInput } from "./helpers/inquirer";
import { TasksList } from "./models/TasksList";
import { readDB, saveDB } from "./helpers/db";

require("colors");

const main = async () => {
  let opt = "";
  const tasksList = new TasksList();
  const tasksDB = readDB();

  if (tasksDB) {
    // TODO: Cargar tareas
    tasksList.loaddB(tasksDB);
  }

  do {
    // Prints menu
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await readInput("Descripción:");
        tasksList.createTask(desc);
        break;
      case "2":
        console.log(tasksList.toArray);
        break;
      case "3":
        break;
      case "4":
        break;
      case "5":
        break;
    }

    saveDB(JSON.stringify(tasksList.toArray));

    if (opt !== "0") {
      await pause();
    }
  } while (opt !== "0");
};

main();
