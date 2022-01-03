import "colors";
import inquirer from "inquirer";
import { TaskEntity } from "models/Task";

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
        value: "1",
        name: `${"1.".green} Create a task`,
      },
      {
        value: "2",
        name: `${"2.".green} Tasks list`,
      },
      {
        value: "3",
        name: `${"3.".green} Completed tasks list`,
      },
      {
        value: "4",
        name: `${"4.".green} Pending tasks list`,
      },
      {
        value: "5",
        name: `${"5.".green} Complete task(s)`,
      },
      {
        value: "6",
        name: `${"6.".green} Delete task(s)`,
      },
      {
        value: "0",
        name: `${"0.".green} Exit`,
      },
    ],
  });

  return option;
};

export const pause = async () => {
  const { response } = await inquirer.prompt({
    type: "input",
    name: "response",
    message: `\nPresione ${"ENTER".green} para confirmar`,
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

export const confirmAction = async (message: string) => {
  const { response } = await inquirer.prompt({
    type: "confirm",
    name: "response",
    message,
  });
  return response;
};
