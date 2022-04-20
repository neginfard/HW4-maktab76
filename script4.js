function truthyValue(entranceArray) {
  let trueArr = entranceArray.filter(Boolean);
  return trueArr;
}
let firstArray = [null, 5, 0, "John", "", 2, false, undefined, NaN];
let truthyArray = truthyValue(firstArray);
console.log(truthyArray);
