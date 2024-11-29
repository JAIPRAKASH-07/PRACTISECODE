// //let array =[27,15,-10,55,20,5,51 ] find the second largest number using for loop
// let array = [27, 15, -10, 55, 20, 5, 51];

// let largest = Number.NEGATIVE_INFINITY;
// let secondLargest = Number.NEGATIVE_INFINITY;

// for (let i = 0; i < array.length; i++) {
//     if (array[i] > largest) {
//         secondLargest = largest; // Update secondLargest to the previous largest
//         largest = array[i];      // Update largest to the current number
//     } else if (array[i] > secondLargest && array[i] !== largest) {
//         secondLargest = array[i]; // Update secondLargest if it's greater than the current secondLargest
//     }
// }

// console.log("The second largest number is:", secondLargest);














function findSecondHighest(arr) {
   
    if (arr.length < 2) {
        return "Array must have at least two elements.";
    }

    let highest = 0;           
    let secondHighest = 0;     

    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highest) {
            secondHighest = highest; 
            highest = arr[i];       
        } else if (arr[i] > secondHighest && arr[i] !== highest) {
            secondHighest = arr[i];  
        }
    }

    return secondHighest === 0 ? "No second highest number found."  : secondHighest;
}

// Example Usage
const numbers = [32, 35, 31, 30, 34, 36, 36,37];
console.log(findSecondHighest(numbers)); // Output: 34
