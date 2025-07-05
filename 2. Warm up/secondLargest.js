//_ second largest number

function secondLargest(arr) {
  if (arr.length <= 1) return "Array should have at least two numbers";

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      secondLargest = largest;
      largest = arr[i];
    } else if (secondLargest < arr[i] && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }
  if (secondLargest === -Infinity && !arr.includes(-Infinity))
    return "No second largest found";

  return secondLargest;
}

console.log(secondLargest([0, -2, -3, 10, 30, 49, 80]));
console.log(secondLargest([]));
console.log(secondLargest([5]));
console.log(secondLargest([4, 4, 4, 4]));
console.log(secondLargest([-1, -5, -2, -10]));
console.log(secondLargest([4, 5]));
console.log(secondLargest([Infinity, -Infinity]));
