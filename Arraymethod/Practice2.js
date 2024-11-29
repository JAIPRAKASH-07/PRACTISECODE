//Refactoring Old Code with ES6 Features
//Old Code (ES5 Style):


var numbers = [1, 2, 3, 4];
var doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled); 

var user = { name: "Alice", age: 25 };
var name = user.name;
var age = user.age;
console.log(name, age); 

//Refactored Code (ES6 Style):


const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); 

const user = { name: "Alice", age: 25 };
const { name, age } = user; 
console.log(name, age); 

//Old Code (Without Template Literals):


function greet(name, age) {
  return "Hello, " + name + ". You are " + age + " years old.";
}
console.log(greet("Alice", 25)); 

//Refactored Code (Using Template Literals):


const greet = (name, age) => `Hello, ${name}. You are ${age} years old.`;
console.log(greet("Alice", 25)); 

//Old Code (Without Spread Operator):


var arr1 = [1, 2];
var arr2 = [3, 4];
var combined = arr1.concat(arr2);
console.log(combined); 

//Refactored Code (Using Spread Operator):


const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); 