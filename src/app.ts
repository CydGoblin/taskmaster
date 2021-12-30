import { inquirerMenu, pause, readInput } from "./helpers/inquirer";
import { Tasks } from "./models/Tasks";

require("colors");

const main = async () => {
  let opt = "";
  const tasks = new Tasks();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await readInput("Descripción:");
        tasks.createTask(desc);
        break;
      case "2":
        console.log(tasks.listTasks);
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
