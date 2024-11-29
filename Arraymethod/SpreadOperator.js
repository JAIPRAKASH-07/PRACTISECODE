//Spread Operator: Expands elements of arrays or objects into individual elements.

//Problem: Merge two objects.

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 };
console.log(merged);