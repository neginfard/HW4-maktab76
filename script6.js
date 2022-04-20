function roundedSum(arr) {
  let sumOfArr = arr.reduce(function (acc, cur) {
    return acc + cur;
  });
  return Math.round(sumOfArr);
}
let numbers = [15.5, 2.3, 1.1, 4.7];
let holdRoundFunction = roundedSum(numbers);
console.log(holdRoundFunction);
