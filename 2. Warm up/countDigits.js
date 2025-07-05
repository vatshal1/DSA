//_ Count Digit

function countDigit(num) {
  let count = 0;

  if (num === 0) return 1;
  else if (!Number.isInteger(num)) return `'${num}' is not valid Integer`;

  num = Math.abs(num);

  while (num !== 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

console.log(countDigit(10));
console.log(countDigit(-10));
console.log(countDigit(0));
console.log(countDigit(-0));
console.log(countDigit(-1000000000000000));
console.log(countDigit(1000000000000000));
console.log(countDigit(Number.MAX_SAFE_INTEGER));
console.log(countDigit(Number.MIN_SAFE_INTEGER));
console.log(countDigit(NaN));
console.log(countDigit(undefined));
console.log(countDigit(-Infinity));
console.log(countDigit(Infinity));
console.log(countDigit("hello"));
console.log(countDigit(10.2));
