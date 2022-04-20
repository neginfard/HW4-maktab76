function mergedArray(arr1, arr2) {
  let mergingArr = arr1
    .filter((item) => arr2.indexOf(item) === -1)
    .concat(arr2);
  return mergingArr;
}
let firstArr = [1, 2, 3];
let secondArr = [2, 30, 1];
let holdFunction = mergedArray(firstArr, secondArr);
console.log(holdFunction);

//solution 2
/*
function uniqueAfterMerge(arr1, arr2) {
  let arr = arr1.concat(arr2);
  let uniqueArr = [];

  // loop through array
  for (let i of arr) {
    if (uniqueArr.indexOf(i) === -1) {
      uniqueArr.push(i);
    }
  }
  return uniqueArr;
}

let array1 = [1, 2, 3];
let array2 = [2, 30, 1];
console.log(uniqueAfterMerge(array1, array2));
*/
