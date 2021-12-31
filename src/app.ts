import { inquirerMenu, pause, readInput } from "./helpers/inquirer";
import { TasksList } from "./models/TasksList";
import { saveDB } from "./helpers/saveFile";

require("colors");

const main = async () => {
  let opt = "";
  const tasksList = new TasksList();

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
