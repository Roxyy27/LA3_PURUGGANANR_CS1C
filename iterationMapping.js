// Prompt the user to input the Max Limit of the Loops
let maxLimit = parseInt(prompt("Enter the Limit of the Double Loop: "), 7);

// Initialize the counters
for (let i = 0; i <= maxLimit; i++) {
    for (let j = 0; j <= maxLimit; j++) {
        // Calculate the added value
        let addedValue = i + j;
        // Log the corresponding Loop Points and added Value per iteration
        console.log(`${i} ${j} Added value is ${addedValue}`);
    }
}
