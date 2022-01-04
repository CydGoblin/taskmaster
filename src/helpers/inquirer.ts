import "colors";
import inquirer from "inquirer";
import { TaskEntity } from "models/Task";

export enum MENUOPTIONS {
  CREATE,
  LIST,
  LIST_COMPLETE,
  LIST_PENDING,
  MARK_COMPLETE,
  DELETE,
  EXIT,
}

export const inquirerMenu = async () => {
  console.clear();
  console.log("====================".green);
  console.log("  Select an option  ".white);
  console.log("====================\n".green);

  const { option } = await inquirer.prompt({
    type: "list",
    name: "option",
    message: "What do you want to do?",
    choices: [
      {
        value: MENUOPTIONS.CREATE,
        name: `${"1.".green} Create a task`,
      },
      {
        value: MENUOPTIONS.LIST,
        name: `${"2.".green} Tasks list`,
      },
      {
        value: MENUOPTIONS.LIST_COMPLETE,
        name: `${"3.".green} Completed tasks list`,
      },
      {
        value: MENUOPTIONS.LIST_PENDING,
        name: `${"4.".green} Pending tasks list`,
      },
      {
        value: MENUOPTIONS.MARK_COMPLETE,
        name: `${"5.".green} Complete task(s)`,
      },
      {
        value: MENUOPTIONS.DELETE,
        name: `${"6.".green} Delete task(s)`,
      },
      {
        value: MENUOPTIONS.EXIT,
        name: `${"0.".green} Exit`,
      },
    ],
  });

  return option as number;
};

export const pause = async () => {
  const { response } = await inquirer.prompt({
    type: "input",
    name: "response",
    message: `\nPress ${"ENTER".green} to continue`,
  });
  return response;
};

export const readInput = async (message: string) => {
  const { desc } = await inquirer.prompt({
    type: "input",
    name: "desc",
    message,
    validate(value) {
      if (value.length === 0) {
        return "Please return a valid value";
      }
      return true;
    },
  });
  return desc;
};

export const menuDeleteTask = async (tasksList: TaskEntity[]) => {
  let choices = tasksList.map((task, index) => {
    const idx = `${index + 1 + "."}`.green;
    return {
      value: task.id,
      name: `${idx.green} ${task.desc}`,
    };
  });

  choices.unshift({ value: "0", name: `${"0.".green} Cancel` });

  const { id } = await inquirer.prompt({
    type: "list",
    name: "id",
    choices,
  });

  return id;
};

export const menuCompleteTask = async (tasksList: TaskEntity[]) => {
  let choices = tasksList.map((task, index) => {
    const idx = `${index + 1 + "."}`.green;
    return {
      value: task.id,
      name: `${idx.green} ${task.desc}`,
      checked: task.completed !== null ? true : false,
    };
  });

  const { ids } = await inquirer.prompt({
    type: "checkbox",
    name: "ids",
    message: "Selecciones",
    choices,
  });

  return ids;
};

export const confirmAction = async (message: string) => {
  const { response } = await inquirer.prompt({
    type: "confirm",
    name: "response",
    message,
  });
  return response;
};
