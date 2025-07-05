//-> largest number in the array
function largestNum(arr) {
  if (!arr.length) return "Array is empty";

  let largest = -Infinity;
  // let largest= arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }

  return largest;
}

console.log(largestNum([]));
console.log(largestNum([0]));
console.log(largestNum([10, 20, 40, 80, 50, 70, 100]));
console.log(largestNum([Infinity, -Infinity, 0]));
console.log(largestNum([Number.MAX_VALUE, Number.MIN_VALUE]));
