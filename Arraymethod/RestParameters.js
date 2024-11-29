//Rest Parameters: Collects all remaining elements into an array.

//Problem: Write a function that takes an unknown number of arguments and returns their average.

function average(...nums) {
  return nums.reduce((acc, num) => acc + num, 0) / nums.length;
}
console.log(average(2, 4, 6));