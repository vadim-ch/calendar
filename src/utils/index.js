export function getDateWithChangeMonths(date, months) {
  const dateCopy = new Date(date.getTime());
  dateCopy.setMonth(date.getMonth() + months);
  return dateCopy;
}

