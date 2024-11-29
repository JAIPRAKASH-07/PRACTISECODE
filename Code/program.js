  
// let n = 5; 
// for (let i = 1; i <= n; i++) { 
//     let star = ""; 
//     for (let j = 1; j <= i; j++) { 
//         star += "*"; 
//     }
//     console.log(star); 
// }


// let n = 1; 
// for (let i = 5; i >= n; i--) { 
//     let star = "";
//     for (let j = 1; j <= i; j++) { 
//         star += "*"; 
//     }
//     console.log(star); 
// }

// let rows = 5;


// let pattern = "";


// for (let n = 1; n <= rows; n++) {
//    for (let num = 1; num <= 6 - n; num++) {
//       pattern += num;
//    }
//    pattern += "\n";
// }
// console.log(pattern);


let rows = 5;
let pattern = "";
for (let n = 1; n <= rows; n++) {
   for (let num = 1; num <= 5; num++) {
      pattern += "*";
   }
   pattern += "\n";
}
console.log(pattern);
