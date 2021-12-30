import "colors";
import { createInterface } from "readline";

export const mostrarMenu = () => {
  return new Promise<string>((resolve) => {
    console.clear();
    console.log("=========================".green);
    console.log("  Seleccione una opción  ".green);
    console.log("=========================\n".green);

    console.log(`${"1.".green} Crea un tarea`);
    console.log(`${"2.".green} Listar tareas`);
    console.log(`${"3.".green} Listar tareas completadas`);
    console.log(`${"4.".green} Listar tareas pendientes`);
    console.log(`${"5.".green} Completar tarea(s)`);
    console.log(`${"6.".green} Borrar tarea`);
    console.log(`${"0.".green} Salir`);

    const readLine = createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question("Seleccione una opción: ", (opt) => {
      readLine.close();
      resolve(opt);
    });
  });
};

export const pausa = () => {
  return new Promise((resolve) => {
    const readLine = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readLine.question(`\nPresione ${"ENTER".green} para confirmar\n`, (opt) => {
      readLine.close();
      resolve("");
    });
  });
};
