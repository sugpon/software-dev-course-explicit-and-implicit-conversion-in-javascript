/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2;//explicitly converting string to number type
console.log("The result is: " + result);//displaying the result 

let isValid = Boolean("false");// Explicitly converting the string "false" to a boolean also "false" is a non-empty string, and in JavaScript, any non-empty string is truthy

if (isValid) {//Checking if the boolean value is true
    console.log("This is valid!");//This will always print because "false" as a string is truthy
}

let age = Number("25");//explicitly converting string to number 
let totalAge = age + 5;
console.log("Total Age: " + totalAge);// displaying age

//Example of Implicit Type Conversion
console.log("Example of Implicit Type Conversion");
let babyAge= "Just Born";//declaring a boolean implicitly
if (babyAge){//here the boolean value is considered truthy
  console.log(babyAge + " Yay! Congratulations on the Baby!");//display baby age
}

babyAge = "0"+1;//implicit string concatenation happening
console.log(`You are ${babyAge} now, Happy 1st Birthday Baby`);//displaying baby age

//Example of Explicit Type Conversion
// Convert null to a boolean
console.log("Example of Explicit Type Conversion");
let nullValue = null;// declaring a variable nullValue to null
console.log("Before:", nullValue, "| Type:", typeof nullValue);// displaying the variable and using type of to show the variable data type
console.log("After:", Boolean(nullValue), "| Type:", typeof Boolean(nullValue));// explicitly declaring data type for the nullValue and using type of to show how it displays

// Convert undefined to a boolean
let undefinedValue;//declaring a undefined variable without initializing it
console.log("Before:", undefinedValue, "| Type:", typeof undefinedValue);//displaying the undefinedValue as it is using typeof
console.log("After:", Boolean(undefinedValue), "| Type:", typeof Boolean(undefinedValue));//explicitely changing it to Be=oolean and displaying undefinedValue
