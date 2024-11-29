// map(): Creates a new array by applying a function to each element of the original array.

//Problem: Convert an array of temperatures from Celsius to Fahrenheit.

const celsius = [0, 10, 20, 30,40,50,60, 70, 80, 90,100];
const fahrenheit = celsius.map(temp => (temp * 9/5) + 32);
console.log(fahrenheit); 

