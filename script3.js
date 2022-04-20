function upperFirstLetter(str) {
  let strTOArr = str.split(" ");

  let strUpper = [];
  for (let item of strTOArr) {
    strUpper.push(item[0].toUpperCase() + item.slice(1));
  }

  return strUpper.join(" ");
}
let firstString = "the quick brown fox";
let upperString = upperFirstLetter(firstString);
console.log(upperString);
