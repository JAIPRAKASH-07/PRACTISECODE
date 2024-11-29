
let n = 0; // Initialize the counter

function add() {
    n = n +2; // Increment the counter
    updateDisplay(); // Update the displayed value
}

function sub() {
    n = n - 3; // Decrement the counter
    updateDisplay(); // Update the displayed value
}

function updateDisplay() {
    document.querySelector('#pid').innerHTML = n; // Display the updated value
}
