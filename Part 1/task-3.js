function biggerNumber(num) {
  let str = num.toString();

  for (let i = str.length - 1; i > 0; i--) {
    if (str[i] > str[i - 1]) {
      let minIdx = i;
      for (let j = i + 1; j < str.length; j++) {
        if (str[j] < str[minIdx] && str[j] > str[i - 1]) {
          minIdx = j;
        }
      }

      let temp = str[i - 1];
      str = str.substring(0, i - 1) + str[minIdx] + str.substring(i);
      str = str.substring(0, minIdx) + temp + str.substring(minIdx + 1);

      let right = str.substring(i).split("").sort().join("");
      str = str.substring(0, i) + right;

      return parseInt(str);
    }
  }

  return -1;
}

console.log(biggerNumber(23));
console.log(biggerNumber(624));
console.log(biggerNumber(2018));
//The next big number in this example is not 8210 -> 2081.

console.log(biggerNumber(9));
console.log(biggerNumber(111));
console.log(biggerNumber(531));
