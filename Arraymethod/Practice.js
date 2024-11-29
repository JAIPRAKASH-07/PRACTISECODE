
// 1. Flatten an Array

//Problem: Write a function to flatten a nested array (convert `[1, [2, [3, 4]], 5]` to `[1, 2, 3, 4, 5]`).

//Solution 1: Using `reduce()` and Recursion

function flattenArray(arr) {
  return arr.reduce((acc, item) => 
    Array.isArray(item) ? acc.concat(flattenArray(item)) : acc.concat(item), []);
}
console.log(flattenArray([1, [2, [3, 4]], 5])); 


//Solution 2: Using ES6 `flat()`

const arr = [1, [2, [3, 4]], 5];
const flattened = arr.flat(Infinity); // Infinity ensures all levels are flattened
console.log(flattened); 



//2. Remove Duplicates

//Problem: Write a function to remove duplicates from an array (convert `[1, 2, 2, 3]` to `[1, 2, 3]`).

//Solution 1: Using `Set`
const removeDuplicates = arr => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 2, 3])); 


//Solution 2: Using `filter()`

const removeDuplicates1 = arr => arr.filter((item, index) => arr.indexOf(item) === index);
console.log(removeDuplicates1([1, 2, 2, 3])); 

//3. **Chunk an Array**

//Problem: Write a function to split an array into chunks of a given size.

//Solution:

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
console.log(chunkArray([1, 2, 3, 4, 5], 2)); 

//4. Find Intersection of Two Arrays

//Problem: Find common elements between two arrays.

//Solution:

const intersection = (arr1, arr2) => arr1.filter(item => arr2.includes(item));
console.log(intersection([1, 2, 3], [2, 3, 4])); // [2, 3]

//5. Array to Object Conversion

//Problem: Convert an array of key-value pairs into an object.

//Solution:

const arrayToObject = arr => Object.fromEntries(arr);
console.log(arrayToObject([["name", "Alice"], ["age", 25]])); 

