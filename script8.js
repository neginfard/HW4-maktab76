function getMonthName(entranceDay) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthNumber = entranceDay.getMonth();
  return months[monthNumber];
}
console.log(getMonthName(new Date("10/11/2009")));
console.log(getMonthName(new Date("11/13/2014")));

//solution 2
/*
function monthName(date) {
  let longMonth = date.toLocaleString("en-us", { month: "long" });
  return longMonth;
}
console.log(monthName(new Date("10/11/2009")));
console.log(monthName(new Date("11/13/2014")));
*/
