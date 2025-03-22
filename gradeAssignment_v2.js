// Prompt the user to enter their score
let score = prompt("Enter your score:");

// Convert the input score from string to number
score = Number(score);
if (isNaN(score)) {
    console.log("Invalid input. Please enter a number.");
    return; //Exit if input is invalid
}

let grade; // Variable to hold the equivalent grade
let remarks; // Variable to hold final remarks

//Improved grade calculation using a more readable `if`/`else if` structure
if (score >= 97) {
    grade = "1.00\" Excellent";
} else if (score >= 94) {
    grade = "1.25\" Excellent";
} else if (score >= 91) {
    grade = "1.50\" Above Average";
} else if (score >= 88) {
    grade = "1.75\" Above Average";
} else if (score >= 85) {
    grade = "2.00\" Average";
} else if (score >= 82) {
    grade = "2.25\" Average";
} else if (score >= 79) {
    grade = "2.50\" Below Average";
} else if (score >= 76) {
    grade = "2.75\" Below Average";
} else if (score === 75) {
    grade = "3.00\" Below Average";
} else if (score >= 72) {
    grade = "4.00\" Poor";
} else {
    grade = "5.00\" Poor";
}

// Determine final remarks using if/else statements
if (score >= 90) {
    remarks = "HIGH PASS, Candidate for Cum Laude"; // High performance
} else if (score >= 80) {
    remarks = "AVERAGE PASS"; // Average performance
} else if (score >= 75) {
    remarks = "LOW PASS"; // Low performance
} else {
    remarks = "FAILED, Needs Improvement"; // Below passing performance
}

// Output the results to the console
console.log("Result");
console.log(`Your equivalent Grade is "${grade}"`);
console.log(`Final Remarks: ${remarks}`);
