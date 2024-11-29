//some(): Checks if at least one element passes a test function.

//Problem: Check if a word contains the letter "a".

const words = ["hello", "apple", "world"];
const containsA = words.some(word => word.includes("a"));
console.log(containsA); // true