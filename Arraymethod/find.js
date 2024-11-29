//find(): Returns the first element that satisfies a provided test function.

//Problem: Find the first user with age greater than 25.

const users = [{ age: 20 }, { age: 30 }];
const user = users.find(u => u.age > 25);
console.log(user); // { age: 30 }