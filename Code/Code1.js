// Write a JavaScript program to calculate the sum of an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] using the reduce() method.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = array.reduce((a, c) => {
    return a + c;
}, 0);

//console.log("The sum of the array is:", sum);

//Question:-Write a JavaScript program to find the maximum value in an array [12, 45, 2, 67, 34, 89, 22] using the reduce() method.

const array1 = [12, 45, 2, 67, 34, 89, 22];

const max = array1.reduce((accumulator, currentValue) => {
    return accumulator > currentValue ? accumulator : currentValue;
}, array[0]);

console.log("The maximum value in the array is:", max);



//Question:Write a JavaScript program to flatten a 2D array [[1, 2], [3, 4], [5, 6]] into a single array using the reduce() method.

const arr = [[1, 2], [3, 4], [5, 6]];

const flattened = arr.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
}, []);

console.log("The flattened array is:", flattened);
