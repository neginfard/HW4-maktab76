function protectEmail(email) {
  let splitted = email.split("@");
  let part1 = splitted[0];
  let avg = part1.length / 2;
  part1 = part1.slice(0, part1.length - avg);
  let part2 = splitted[1];
  return part1 + "...@" + part2;
}

console.log(protectEmail("robin_singh@example.com"));
