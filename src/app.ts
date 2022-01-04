import {
  confirmAction,
  inquirerMenu,
  menuCompleteTask,
  menuDeleteTask,
  pause,
  readInput,
} from "./helpers/inquirer";
import { TasksList, TASKSTATUS } from "./models/TasksList";
import { readDB, saveDB } from "./helpers/storage";

require("colors");

const main = async () => {
  let opt = "";
  const tasksList = new TasksList();
  const tasksDB = readDB();

  if (tasksDB) {
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
        tasksList.showList();
        break;
      case "3":
        tasksList.showList(TASKSTATUS.COMPLETED);
        break;
      case "4":
        tasksList.showList(TASKSTATUS.PENDING);
        break;
      case "5":
        // Complete task
        const ids = await menuCompleteTask(tasksList.toArray);
        tasksList.toggleCompleteTask(ids);
        break;
      case "6":
        const id = await menuDeleteTask(tasksList.toArray);
        if (id && id !== 0) {
          const proceed = await confirmAction(
            "Are you sure you want to delete this task?"
          );
          if (proceed) {
            tasksList.deleteTask(id);
          }
        }
        break;
    }

    saveDB(JSON.stringify(tasksList.toArray));

    if (opt !== "0") {
      await pause();
    }
  } while (opt !== "0");
};

main();
