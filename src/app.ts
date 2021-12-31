import { inquirerMenu, pause, readInput } from "./helpers/inquirer";
import { TasksList } from "./models/TasksList";

require("colors");

const main = async () => {
  let opt = "";
  const tasksList = new TasksList();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await readInput("Descripción:");
        tasksList.createTask(desc);
        break;
      case "2":
        console.log(tasksList.listTasks);
        break;
      case "3":
        break;
      case "4":
        break;
      case "5":
        break;
    }

    if (opt !== "0") {
      await pause();
    }
  } while (opt !== "0");
};

main();
