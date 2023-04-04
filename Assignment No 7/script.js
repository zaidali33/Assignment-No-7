//1) Write a js program to find maximum between two numbers.

var enterFirstNum =+ prompt("Enter First Number:");
var enterSecondNumber  =+ prompt("Enter Second Number:");


if ( enterFirstNum > enterSecondNumber ){

    console.log("First Number is Greater");
}

else{
     console.log("Second Number is Greater");
}

//2) Write a js program to find maximum between three numbers.

var firstNum = + prompt("Enter First Number:");
var secondNum = + prompt("Enter Second Number:");
var thirdNum = + prompt("Enter Third Number:");

var max;
if (firstNum > secondNum) {

    if (firstNum > thirdNum) {
        max = firstNum;
    }
    else {
        max = thirdNum;
    }
}
else if (secondNum > thirdNum) {
    max = secondNum;
}
else {
    max = thirdNum;
}
console.log("Maximum Number is:", max);

//3) Write a js program to check whether a number is negative, positive or zero.

var num =+ prompt("Enter a Numer:");

if( num > 0){
    console.log("Number is Positive.");
}
else if( num < 0){
    console.log("Number is Negative.");
}
else{
    console.log("Number is Zero.");
}

//4) Write a js program to check whether a number is divisible by 5 and 11 or not.

var num = + prompt("Enter a number:");

if (num % 5 == 0) {

    if (num % 11 == 0) {
        console.log("Number is divisivle by 5 and 11.");
    }
    else {
        console.log("Number is divisivle by 5.");
    }
}
else if (num % 11 == 0) {
    console.log("Number is divisivle by 11.");
}

else {
    console.log("Number is not divisivle by 5 and 11.");
}

//5) Write a js program to check whether a number is even or odd.

var num =+ prompt("Enter a number:");

if(num % 2 == 0){
    console.log("It is an even number.");
}
else{
    console.log("It is an odd number.");
}

//6) Write a js program to check whether a year is leap year or not.

var year =+ prompt("Enter a year:");

if(year % 4 ==0){
    console.log("This is leap year.");
}
else{
    console.log("This is not a leap year.");
}

//7) Write a js program to check whether a character is alphabet or not.

var char = prompt("Enter a character:");
if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
    console.log("It is a character.");
}
else {
    console.log("It is not a character.");
} 

//8) Write a js program to input any alphabet and check whether 
//it is vowel or consonant.

var char = prompt("Enter a character:");

if (char == "a" || char == "A" || char == "e" || char == "E" 
|| char == "i" || char == "I" || char == "o" || char == "O" 
|| char == "u" || char == "U") {
    console.log("The enter alphabet is vowel.");
}
else if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
    console.log("The enter alphabet is not a vowel.");
}
else {
    console.log("This is not a alphabet.");
}

//9) Write a js program to input any character and check whether it is alphabet, 
//digit or special character.

var char = prompt("Enter a character:")

if ( char >= "a" || char >= "A" ) {
    console.log("It is an alphabet.");
}
else if (char >= 0 || char<= 0) {
    console.log("It is a digit.");
}
else{
    console.log("It is a special character.");
}

//10) Write a js program to check whether a
// character is uppercase or lowercase alphabet.

var char = prompt("Enter a Character:");

function charactercheck (char) {
    if ((char >= 'A') && (char <= 'Z')){
        console.log("This is upper case Character.");
    }
    else if ((char >= 'a') && (char <= 'z')){
        console.log("This is lower case Character.");
    }
    else{
        console.log("This is not a Character.");
    }
    
}
charactercheck(char);

//11) Write a js program to input week number and print week day.

var num =+ prompt("Enter the Number of a day(1-7):");

if (num == 1) {
    console.log("Monday");
}
 else if (num == 2) {
    console.log("Tuesday");
}
else if (num == 3) {
    console.log("Wednesday");
}
else if (num == 4) {
    console.log("Thursday");
}
else if (num == 5) {
    console.log("Friday");
}
else if (num == 6) {
    console.log("Saturday");
}
else if (num == 7) {
    console.log("Sunday");
}
else {
    alert("Please enter correct Number.");
}

//12) Write a js program to input month number 
//and print number of days in that month.

var num =+ prompt("Enter the Number of the Month(1-12):");

if (num == 1) {
    console.log("January");
}
else if (num == 2) {
    console.log("February");
}
else if (num == 3) {
    console.log("March");
}
else if (num == 4) {
    console.log("April");
}
else if (num == 5) {
    console.log("May");
}
else if (num == 6) {
    console.log("June");
}
else if (num == 7) {
    console.log("July");
}
else if (num == 8) {
    console.log("August");
}
else if (num == 9) {
    console.log("September");
}
else if (num == 10) {
    console.log("October");
}
else if (num == 11) {
    console.log("November");
}
else if (num == 12) {
    console.log("December");
}
else  {
    alert("Enter correct Number.")
}

//13) Write a js program to count total number of notes in given amount.

// ask user to enter amount
var amount = prompt("Enter the amount: ");

// initialize variables for counting notes
var notes5000 = 0, notes1000 = 0, notes500 = 0, notes100 = 0, notes50 = 0, notes20 = 0, notes10 = 0, notes5 = 0, notes1 = 0;

// calculate number of 5000 rupee notes
notes5000 = Math.floor(amount / 5000);
amount = amount % 5000;

// calculate number of 1000 rupee notes
notes1000 = Math.floor(amount / 1000);
amount = amount % 1000;

// calculate number of 500 rupee notes
notes500 = Math.floor(amount / 500);
amount = amount % 500;

// calculate number of 100 rupee notes
notes100 = Math.floor(amount / 100);
amount = amount % 100;

// calculate number of 50 rupee notes
notes50 = Math.floor(amount / 50);
amount = amount % 50;

// calculate number of 20 rupee notes
notes20 = Math.floor(amount / 20);
amount = amount % 20;

// calculate number of 10 rupee notes
notes10 = Math.floor(amount / 10);
amount = amount % 10;

// calculate number of 5 rupee notes
notes5 = Math.floor(amount / 5);
amount = amount % 5;

// calculate number of 1 rupee notes
notes1 = amount;

// display the total number of notes of each denomination
console.log("Total number of 5000 notes: " + notes5000);
console.log("Total number of 1000 notes: " + notes1000);
console.log("Total number of 500 notes: " + notes500);
console.log("Total number of 100 notes: " + notes100);
console.log("Total number of 50 notes: " + notes50);
console.log("Total number of 20 notes: " + notes20);
console.log("Total number of 10 notes: " + notes10);
console.log("Total number of 5 notes: " + notes5);
console.log("Total number of 1 notes: " + notes1);

//14) Write a js program to input angles of a triangle and
// check whether triangle is valid or not.


var angle1 =+ prompt("Enter angle 1:");
var angle2 =+ prompt("Enter angle 2:");
var angle3 =+ prompt("Enter angle 3:");
var sum = angle1 + angle2 + angle3;



function triangleChecker(angle1, angle2, angle3) {

    if (sum == 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {
        return true;
    }
    else {
        return false;
    }

}

var checker = triangleChecker(angle1, angle2, angle3);

if (checker) {
    console.log("Triangle is valid.");
}
else {
    console.log("Triangle is not valid.");
}

//15) Write a js program to input all sides of a triangle 
//and check whether triangle is valid or not.

var side1 = + prompt("Enter first side:");
var side2 = + prompt("Enter second side:");
var side3 = + prompt("Enter third side:");
var checker;

function triangleChecker(side1, side2, side3) {
    if ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1)) {
        return true;
    } else {
        return false;
    }

}

triangleChecker(side1, side2, side3);

if (triangleChecker) {
    console.log("Valid");
}
else {
    console.log("Not valid.");
}

//. Write a js program to check whether the triangle is equilateral,
// isosceles or scalene triangle.


//16) Equilateral triangle: All three sides are equal.
// Isosceles triangle: All two sides are equal.
// Scalene triangle: No sides are equal.

var side1 = + prompt("Enter first side:")
var side2 = + prompt("Enter second side:")
var side3 = + prompt("Enter third side:")

function trianglechecker(side1, side2, side3) {
    if (side1 == side2 == side3) {
        console.log("This is Equilateral triangle.");
    }
    else if ((side1 == side2) || (side2 == side3) || (side1 == side3)) {
        console.log("This is Isosceles triangle.");
    }
    else {
        console.log("This is Scalene triangle.");
    }

}
trianglechecker(side1, side2, side3);

//17) Write a js program to find all roots of a quadratic equation.

var a = parseFloat(prompt("Enter the value of a:"));
var b = parseFloat(prompt("Enter the value of b:"));
var c = parseFloat(prompt("Enter the value of c:"));

var checker = (b * b - 4 * a * c);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
   alert("Invalid input. Please enter valid numbers.");
} else if (checker < 0) {
   console.log("The roots are imaginary numbers.");
} else if (checker == 0) {
   let root1 = (-b / (2 * a));
   let root2 = (-b / (2 * a));
   console.log("The roots are: " + root1 + ", " + root2);
} else {
   let root1 = (-(b + Math.sqrt(checker)) / (2 * a));
   let root2 = (-(b - Math.sqrt(checker)) / (2 * a));
   console.log("The roots are: " + root1 + ", " + root2);
}

//18) Write a js program to calculate profit or loss.
// profit = sellPrice - costPrice

var sellPrice =+  prompt("Enter sell price:");
var costPrice =+  prompt("Enter cost price:");
var profit;
profit = sellPrice - costPrice;

if (profit > 0) {
    console.log("You get profit.");
}
else if (profit < 0) {
    console.log("You get loss.");
}
else if (profit == 0 ){
    console.log("You get neither profit or loss!");
}
else{
    console.log("Invalid input.");
}

//19) Write a js program to input marks of five subjects Physics, 
// Chemistry, Biology, Mathematics and Computer. 
// Calculate percentage and grade according to following:

// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

var Physics = + prompt("Enter thr marks of Physics:");
var Chemistry = + prompt("Enter thr marks of Chemistry:");
var Biology = + prompt("Enter thr marks of Biology:");
var Mathmatics = + prompt("Enter thr marks of Mathmatics:");
var Computer = + prompt("Enter thr marks of Computer:");

var sum = (Physics + Chemistry + Biology + Mathmatics + Computer);
var percentage = ((sum * 100) / 500);

if (percentage >= 90) {
    console.log(percentage + "%" + " and Grade A");
}
else if (percentage >= 80) {
    console.log(percentage + "%" + " and Grade B");
}
else if (percentage >= 70) {
    console.log(percentage + "%" + " and Grade C");
}
else if (percentage >= 60) {
    console.log(percentage + "%" + " and Grade D");
}
else if (percentage >= 40) {
    console.log(percentage + "%" + " and Grade E");
}
else if (percentage < 40) {
    console.log(percentage + "%" + " and Grade F");
}
else {
    alert("Invalid Input!");
}

//20) Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%



//  Get the basic salary from the user
var basicSalary = parseInt(prompt("Enter the basic salary: "));

var grossSalary;

// Calculate gross salary based on basic salary
if (basicSalary <= 10000) {
  grossSalary = basicSalary + (basicSalary * 0.2) + (basicSalary * 0.8);
} else if (basicSalary <= 20000) {
  grossSalary = basicSalary + (basicSalary * 0.25) + (basicSalary * 0.9);
} else {
  grossSalary = basicSalary + (basicSalary * 0.3) + (basicSalary * 0.95);
}

// Display the gross salary to the user
console.log("Gross Salary: " + grossSalary);


//21) Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill


// Prompt user for input
var units = parseFloat(prompt("Enter electricity units consumed: "));

// Calculate bill
var bill = 0;
if (units <= 50) {
  bill = units * 0.5;
} else if (units <= 150) {
  bill = 25 + (units - 50) * 0.75;
} else if (units <= 250) {
  bill = 100 + (units - 150) * 1.20;
} else {
  bill = 220 + (units - 250) * 1.50;
}

// Add surcharge of 20%
bill = bill * 1.2;

// Display the result
console.log(`Total electricity bill: Rs. ${bill.toFixed(2)}`);