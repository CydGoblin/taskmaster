import {
  confirmAction,
  inquirerMenu,
  menuCompleteTask,
  menuDeleteTask,
  MENUOPTIONS,
  pause,
  readInput,
} from "./helpers/inquirer";
import { TasksList, TASKSTATUS } from "./models/TasksList";
import { Storage } from "./helpers/storage";

require("colors");

const main = async () => {
  let opt;
  const tasksList = new TasksList();
  const storage = new Storage();
  const tasksDB = storage.readDB();

  if (tasksDB) {
    tasksList.loaddB(tasksDB);
  }

  do {
    // Prints menu
    opt = await inquirerMenu();

    switch (opt) {
      case MENUOPTIONS.CREATE:
        const desc = await readInput("Descripción:");
        tasksList.createTask(desc);
        break;
      case MENUOPTIONS.LIST:
        tasksList.showList();
        break;
      case MENUOPTIONS.LIST_COMPLETE:
        tasksList.showList(TASKSTATUS.COMPLETED);
        break;
      case MENUOPTIONS.LIST_PENDING:
        tasksList.showList(TASKSTATUS.PENDING);
        break;
      case MENUOPTIONS.MARK_COMPLETE:
        // Complete task
        const ids = await menuCompleteTask(tasksList.toArray);
        tasksList.toggleCompleteTask(ids);
        break;
      case MENUOPTIONS.DELETE:
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

    storage.saveDB(JSON.stringify(tasksList.toArray));

    if (opt !== MENUOPTIONS.EXIT) {
      await pause();
    }
  } while (opt !== MENUOPTIONS.EXIT);
};

main();
