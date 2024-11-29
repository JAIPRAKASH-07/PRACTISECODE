//every(): Checks if all elements pass a test function.

//Problem: Check if all users are adults.

const users = [{ age: 20 }, { age: 30 }];
const allAdults = users.every(user => user.age >= 18);
console.log(allAdults); 