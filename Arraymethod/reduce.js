//reduce(): Applies a function to an accumulator and each array element to reduce the array to a single value.

//Problem: Find the product of all numbers in an array.

const numbers = [1, 2, 3, 4,5,6,7,8,9];
const product = numbers.reduce((acc, num) => acc * num, 1);
console.log(product); 
