import "colors";
import inquirer from "inquirer";

export const inquirerMenu = async () => {
  // console.clear();
  console.log("=========================".green);
  console.log("  Select an option  ".green);
  console.log("=========================\n".green);

  const { option } = await inquirer.prompt({
    type: "list",
    name: "option",
    message: "What do you want to do?",
    choices: [
      {
        value: "1",
        name: "1. Create a task",
      },
      {
        value: "2",
        name: "2. Tasks list",
      },
      {
        value: "3",
        name: "3. Completed tasks list",
      },
      {
        value: "4",
        name: "4. Pending tasks list",
      },
      {
        value: "5",
        name: "5. Complete task(s)",
      },
      {
        value: "6",
        name: "6. Delete task(s)",
      },
      {
        value: "0",
        name: "0. Exit",
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
