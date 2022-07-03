export const convertToUnixTime = (date) => {
  return Math.floor(date.getTime / 1000);
};

export const converUnixTime = (unixTimestamp) => {
  const mulSec = unixTimestamp * 1000;
  return new Date(mulSec).toLocaleDateString();
};
export const createDate = (date, days, weeks, months, years) => {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days + 7 * weeks);
  newDate.setMonth(newDate.getMonth() + months);
  newDate.setFullYear(newDate.getFullYear() + years);
};
