//filter(): Creates a new array with elements that pass a specified test function.

//Problem: Get all strings longer than 3 characters.

const words = ["hi", "hello", "sun", "moon"];
const longWord = words.filter(word => word.length > 3);
console.log(longWord);


