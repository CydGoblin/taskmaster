import { inquirerMenu, pause } from "./helpers/inquirer";
import { Task } from "./models/Task";
import { Tasks } from "./models/Tasks";

require("colors");

const main = async () => {
  let opt = "";
  const tasks = new Tasks();
  tasks.createTask("TESTJHEFD");

  do {
    opt = await inquirerMenu();
    console.log({ opt });

    if (opt !== "0") {
      await pause();
    }
  } while (opt !== "0");
};

main();
