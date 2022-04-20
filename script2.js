function sumArray(entranceArray) {
  let sum = entranceArray.reduce(function (acc, cur) {
    return acc + cur;
  });
  return sum;
}

let firstArray = [1, 2, 3, 4, 5, 6];
let computedSum = sumArray(firstArray);
console.log(computedSum);
