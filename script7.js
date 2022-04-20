function currentDay(separator) {
  let today = new Date();
  let curDay = today.getDate();
  let curMonth = today.getMonth() + 1; //As January is 0.
  let curYear = today.getFullYear();

  if (curDay < 10) curDay = "0" + curDay;
  if (curMonth < 10) curMonth = "0" + curMonth;
  return curMonth + separator + curDay + separator + curYear;
}
console.log(currentDay("/"));
console.log(currentDay("-"));
