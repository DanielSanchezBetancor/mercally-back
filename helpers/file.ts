import fs from "fs";

const getDate = () => {
  const date = new Date();

  const currentDay = date.getDay();
  const day = currentDay < 10 ? `0${currentDay}` : currentDay;
  const str = `${date.getFullYear()}${date.getMonth()}${day}_${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}`;

  return str;
};

const fileHandler = async (data: string) => {
  const filename = `logs/log_${getDate()}.log`;

  await fs.appendFile(filename, data, () => {});
};

export default fileHandler;
