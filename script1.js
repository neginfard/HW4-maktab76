function exponent(a, n) {
  if (n === 0) {
    return 1;
  } else {
    return a * exponent(a, n - 1);
  }
}

console.log(exponent(8, 3));
