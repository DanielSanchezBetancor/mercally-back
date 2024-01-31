import fileHandler from "./file";

const deepLog = true;
// Buiscar solucion mejor a esta mierda
let msgFile = "";

const log = (msg: string, value?: unknown, level = 0) => {
  const indentation = " ".repeat(level * 4) + "- ";
  value && console.log(indentation + msg, value);
  !value && console.log(indentation + msg);
};

const debug = (msg: string, value?: unknown, level = 0) => {
  if (deepLog) log(`\x1b[1;35m[DEBUG] ${msg}\x1b[0m`, value, level);
};

const logIntoFile = async (msg: string, value?: unknown, level = 0) => {
  const indentation = " ".repeat(level * 4) + "- ";
  msgFile = `${msgFile}\n${indentation}${msg}: ${
    value ? JSON.stringify(value) : ""
  }`;
};
const saveLogFile = async () => {
  await fileHandler(msgFile);
  msgFile = "";
};

export { log, debug, logIntoFile, saveLogFile };
