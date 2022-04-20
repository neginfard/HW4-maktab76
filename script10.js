function remove_first_occurrence(str, char) {
  let strToArr = str.split(" ");
  let updatedStr = strToArr.splice(strToArr.indexOf(char), 1);
  //return updatedStr;
  return strToArr.join(" ");
}

console.log(
  remove_first_occurrence("The quick brown fox jumps over the lazy dog", "the")
);
