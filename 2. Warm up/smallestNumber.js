//-> smallest number in the array
function smallestNum(arr) {
  if (!arr.length) return "Array is empty";

  let smallest = Infinity;
  // let smallest= arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (smallest > arr[i]) {
      smallest = arr[i];
    }
  }

  return smallest;
}

console.log(smallestNum([]));
console.log(smallestNum([0]));
console.log(smallestNum([10, 20, 40, 80, 50, 70, 100]));
console.log(smallestNum([Infinity, -Infinity, 0]));
console.log(smallestNum([Number.MAX_VALUE, Number.MIN_VALUE]));
