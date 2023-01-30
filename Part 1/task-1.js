function sortString(input) {
  if (input === "") {
    return "";
  } else {
    let words = input.split(" ");
    words.sort(function (a, b) {
      let aNum = a.replace(/[^0-9]/g, "");
      let bNum = b.replace(/[^0-9]/g, "");
      return aNum - bNum;
    });
    return words.join(" ");
  }
}

console.log(sortString("g5et ski3lls on6 use1 your2 to4 7top"));
console.log(sortString(""));
console.log(sortString("practic3 h4rder yo1u 2hould"));
