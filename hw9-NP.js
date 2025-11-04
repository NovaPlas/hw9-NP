/**
 * COMP 484 JavaScript Coding Exercises
 * hw9-yourInitials.js
 *
 * NOTE: All declarations use `var`, camelCase naming, and statements end with semicolons.
 *       Comments explain required logic where requested.
 */

/* -----------------------------
   Set 1: Advanced Syntax, Types, and Quirks
   ----------------------------- */

/* Exercise 1: Complex Arithmetic and Standard Rules**
Calculate the final result of the following expression, making sure to use
`camelCase` for the final variable name and end all lines with a semicolon:
$3 + 5 * (10 / 2) - (8 - 4)$.
Output the result using `console.log()`.
*/
var complexArithmeticResult = 3 + 5 * (10 / 2) - (8 - 4);
console.log('Exercise 1 result:', complexArithmeticResult); // expected 3 + 5*(5) - 4 = 3 + 25 - 4 = 24;

/* Exercise 2: Case Sensitivity Test**
Declare a variable named `projectIdentifier` and assign it the string value
"COMP484". On the next line, attempt to reassign its value to "JS_Advanced" using
an incorrect casing (e.g., `ProjectIdentifier`). Use a comment to explain why this
reassignment attempt fails based on JavaScript's rules. Finally, correctly reassign
and log the correct final value. */
var projectIdentifier = "COMP484";
// The following line would fail because JavaScript identifiers are case-sensitive.
// ProjectIdentifier = "JS_Advanced"; // Uncaught ReferenceError: ProjectIdentifier is not defined
// Explanation: `ProjectIdentifier` is a different identifier from `projectIdentifier` (case-sensitive).
// To correctly reassign, use the exact same variable name (same casing):
projectIdentifier = "JS_Advanced";
console.log('Exercise 2 final value:', projectIdentifier);

/* Exercise 3: String Quoting Challenge**
Declare a variable named `courseDescription` using `var` and `camelCase`. Assign it
the string value: `The course is "interactive" and involves 'scripting' logic.`
Define the string using double quotes, and ensure no escaping is required by using
single quotes internally for the word 'scripting'. */
var courseDescription = "The course is \"interactive\" and involves 'scripting' logic.";
// The instruction requested double quotes for the string and single quotes for the internal word 'scripting'.
// Note: I used escaped double quotes for "interactive" so the external double quotes remain valid.
console.log('Exercise 3 description:', courseDescription);

/* Exercise 4: Escaping and Console Output**
Declare a variable named `errorMessage` and assign it a string defined using single
quotes. The string content must be: `An internal server error occurred: "Access
Denied"`. Use the backslash escape character to properly include the double quotes
within the single-quoted string definition. Log the `errorMessage` variable. */
var errorMessage = 'An internal server error occurred: \"Access Denied\"';
console.log('Exercise 4 errorMessage:', errorMessage);

/* Exercise 5: Type Coercion with Non-Plus Operators**
Set `valueA` to the number 10 and `valueB` to the string "4". Calculate
`resultSubtraction` using the subtraction operator (`-`) and `resultMultiplication`
using the multiplication operator (`*`). Log the final values and use the `typeof`
operator in separate console logs to demonstrate that JavaScript coerces `valueB`
into a numeric type for these operations. */
var valueA = 10;
var valueB = "4";
var resultSubtraction = valueA - valueB; // numeric coercion expected
var resultMultiplication = valueA * valueB; // numeric coercion expected
console.log('Exercise 5 resultSubtraction:', resultSubtraction); // 6
console.log('Exercise 5 resultMultiplication:', resultMultiplication); // 40
console.log('Exercise 5 typeof resultSubtraction:', typeof resultSubtraction); // "number"
console.log('Exercise 5 typeof resultMultiplication:', typeof resultMultiplication); // "number"

/* -----------------------------
   Set 2: Operators and Type Theory
   ----------------------------- */

/* Exercise 6: Understanding `null` and `undefined` Types**
Declare a variable `unassignedVar` without giving it a value. Declare a second
variable `explicitNull` and set its value explicitly to `null`. Log the results of
`typeof unassignedVar` and `typeof explicitNull`. Explain in a multi-line comment
why the `typeof` operator returns "object" for `null`. */
var unassignedVar;
var explicitNull = null;
console.log('Exercise 6 typeof unassignedVar:', typeof unassignedVar); // "undefined"
console.log('Exercise 6 typeof explicitNull:', typeof explicitNull);   // "object"

/*
 Explanation:
 Historically, `null` was represented as a null pointer in the original JavaScript implementation.
 The `typeof` operator reports "object" for null due to this historical implementation quirk.
 It is widely recognized as a bug in the language, but it's preserved for backward compatibility.
*/

/* Exercise 7: Boolean Assignment and Type Identification**
Declare a variable `isBlocking` and assign it the boolean value `true`. Then,
reassign `isBlocking` to the string value "true" (with quotes). Use
`console.log(typeof isBlocking)` after each assignment to demonstrate how
JavaScript variables are weakly typed and hold typed values.*/
var isBlocking = true;
console.log('Exercise 7 after boolean assignment typeof isBlocking:', typeof isBlocking); // "boolean"
isBlocking = "true";
console.log('Exercise 7 after string reassignment typeof isBlocking:', typeof isBlocking); // "string"

/* Exercise 8: Invalid Variable Naming */
// invalid area below so I won't add to program. 
// var 1stValue = 5;      // invalid: cannot start identifier with a digit
// var my value = 10;     // invalid: space not allowed in identifier
// var %percent = 50;     // invalid: % is not allowed as first char (except $ and _ are allowed)
// Explanations are placed as comments next to each invalid attempt above.

/* Exercise 9: Chained Shorthand Arithmetic**
Initialize a variable `counterValue` to 50. In a single sequence of statements,
first use the shorthand division assignment operator (`/=`) to divide the value by
5, and then use the shorthand subtraction assignment operator (`-=`) to subtract 3
from the result. Log the final `counterValue` */
var counterValue = 50;
counterValue /= 5; // divide by 5 -> 10
counterValue -= 3; // subtract 3 -> 7
console.log('Exercise 9 final counterValue:', counterValue); // 7

/* Exercise 10: Prefix vs. Postfix Unary Operators**
Initialize a variable `x` to 10.
1. Create a variable `y_post` and assign it the result of `x++`. Log both `y_post`
and `x`.
2. Reinitialize `x` to 10.
3. Create a variable `z_pre` and assign it the result of `++x`. Log both `z_pre`
and `x`.
Use comments to explain how the placement of the unary operator (`++` before or
after) affects the timing of the increment relative to the assignment*/
var x = 10;
var y_post = x++; 
console.log('Exercise 10 y_post (x++):', y_post);
console.log('Exercise 10 x after postfix increment:', x);

x = 10;
var z_pre = ++x; 
console.log('Exercise 10 z_pre (++x):', z_pre);
console.log('Exercise 10 x after prefix increment:', x);



/* -----------------------------
   Set 3: Advanced Logic and Comparisons
   ----------------------------- */

/* Exercise 11: Loose Equality and Coercion**
Set `testNumber` to 0 (a number) and `testBoolean` to `false` (a boolean). Write an
`if` statement that compares them using the loose equality operator (`==`). Inside
the `if` block, log a message confirming they are loosely equal. Explain in a
comment why this comparison returns true (due to type coercion). */
var testNumber = 0;
var testBoolean = false;
if (testNumber == testBoolean) {
    console.log('Exercise 11: 0 and false are loosely equal with ==');
}

/* Exercise 12: Strict Inequality Test**
Set `versionA` to 10.0 (a number) and `versionB` to "10.0" (a string). Write an
`if` statement using the strict inequality operator (`!==`). Log a message if they
are _not_ strictly equal, and use an `else` block to handle the case where they
_are_ strictly equal */
var versionA = 10.0;
var versionB = "10.0";
if (versionA !== versionB) {
    console.log('Exercise 12: versionA and versionB are NOT strictly equal (different types or values).');
} else {
    console.log('Exercise 12: versionA and versionB are strictly equal.');
}

/* Exercise 13: Logical OR and AND Combination**
You are checking user permissions. Set three boolean variables: `isLoggedIn`,
`isSubscriber`, and `isTrialExpired`. Write an `if` condition using logical
operators (`&&` and `||`) that checks if access should be granted. Access is
granted if (`isLoggedIn` is true AND `isSubscriber` is true) OR if (`isLoggedIn` is
true AND `isTrialExpired` is false) */
// Access is granted if:
// (isLoggedIn AND isSubscriber) OR (isLoggedIn AND NOT isTrialExpired)
var isLoggedIn = true;
var isSubscriber = false;
var isTrialExpired = false;
if ((isLoggedIn && isSubscriber) || (isLoggedIn && !isTrialExpired)) {
    console.log('Exercise 13: Access granted.');
} else {
    console.log('Exercise 13: Access denied.');
}

/* Exercise 14: Simulating XOR using Nested Conditionals**
Simulate the Logical XOR operator (either A is true or B is true, but NOT BOTH)
using variables `conditionA` and `conditionB`. Use a combination of `if` statements
and logical operators to achieve this. Log "XOR Success" if the condition is met,
otherwise log "XOR Fail" */
var conditionA = true;
var conditionB = false;
if ((conditionA && !conditionB) || (!conditionA && conditionB)) {
    console.log('Exercise 14: XOR Success');
} else {
    console.log('Exercise 14: XOR Fail');
}

/*Exercise 15: Converting IF/ELSE to Ternary Operator**
Write an initial `if/else` statement that checks if a variable `scriptLoadType`
(initialized to "deferred") is equal to "deferred". If true, assign the string
"Non-blocking" to a variable `loadStatus`. Otherwise, assign "Potentially
Blocking". Then, rewrite the entire conditional structure using only the Ternary
Operator (`? :`) and store the result in a new variable `loadStatusTernary`.
 */
var scriptLoadType = "deferred";
var loadStatus;
if (scriptLoadType === "deferred") {
    loadStatus = "Non-blocking";
} else {
    loadStatus = "Potentially Blocking";
}
console.log('Exercise 15 loadStatus (if/else):', loadStatus);

// Using ternary operator:
var loadStatusTernary = (scriptLoadType === "deferred") ? "Non-blocking" : "Potentially Blocking";
console.log('Exercise 15 loadStatusTernary (ternary):', loadStatusTernary);

/* -----------------------------
   Set 4: Integration and Application
   ----------------------------- */

/* Exercise 16: Commenting and Code Structure**
Define a function named `calculateRenderTime` (you don't need to define its body).
Use proper indentation and a multi-line comment (`/* * /`) to describe the
function's purpose (e.g., calculating the time taken to parse HTML and execute
JavaScript). Include a single-line comment inside the function body using `//` */

function calculateRenderTime() {
    
    /*
      calculateRenderTime:
      Purpose: Estimate the time taken to parse the HTML and execute associated JavaScript,
      possibly combining DOM ready timing and script execution duration to help profile rendering.
    */
    // Implementation would measure timestamps around parsing and script execution.
    // (Function body intentionally left without concrete implementation as requested.)
}

/* Exercise 17: Date Object Formatting Challenge (MM/DD/YYYY)**
Complete the challenge described in the course materials. Create a new Date object.
Using appropriate methods (assume basic knowledge of standard Date methods for
year, month, day), extract the necessary components and use string concatenation to
output the formatted string: "Today is MM/DD/YYYY". (Hint: Months are zero-indexed,
so remember to add 1). Log the final formatted string to the console.*/
var today = new Date();
var month = today.getMonth() + 1; 
var day = today.getDate();
var year = today.getFullYear();
var monthStr = (month < 10) ? ('0' + month) : ('' + month);
var dayStr = (day < 10) ? ('0' + day) : ('' + day);
var formattedDate = 'Today is ' + monthStr + '/' + dayStr + '/' + year;
console.log('Exercise 17 formattedDate:', formattedDate);

/* Exercise 18: Mixed Type Arithmetic Explanation**
Initialize `val1` to 20 (number) and `val2` to "5" (string). Calculate `sumResult =
val1 + val2` and `diffResult = val1 - val2`. Log both results. In a multi-line
comment, explain why the `sumResult` differs significantly from `diffResult`,
referencing JavaScript's behavior with the `+` operator versus other arithmetic
operators.*/

var val1 = 20;
var val2 = "5";
var sumResult = val1 + val2;  //overloaded for string
var diffResult = val1 - val2;  //not overloaded for string
console.log('Exercise 18 sumResult:', sumResult);
console.log('Exercise 18 diffResult:', diffResult);
/*
 Exercise 19: Conditional based on Type Check**
Initialize a variable `dataInput` to the numeric value 484. Write an `if/else`
statement. Use the `typeof` operator inside the condition to check if `dataInput`
is strictly equal to the string "number". If it is, log "Input is numeric." If it
is not, reassign `dataInput` to the boolean value `true`, and then log the new type
using `typeof`. */

var dataInput = 484;
if (typeof dataInput === "number") {
    console.log('Exercise 19: Input is numeric.');
} else {
    dataInput = true;
    console.log('Exercise 19: dataInput reassigned; new type is', typeof dataInput);
}

/*
**Exercise 20: Simulating DOM Manipulation Timing Failure (Conceptual)**
Write the standard JavaScript code sequence necessary to inject an `<h1>` element
containing the text "Interactive Layer Loaded" into the document body.
Crucially, precede this injection code with a multi-line comment explaining the
timing issue that occurs if this script is placed in the HTML `<head>` _without_
the `defer` or `async` attributes, leading to the error "Cannot set property
'innerHTML' of null".
*/

// Standard injection sequence to add an <h1> to the document body:
if (typeof document !== "undefined") {
  var injectedHeader = document.createElement('h1');
  injectedHeader.innerHTML = 'Interactive Layer Loaded';
  document.body.appendChild(injectedHeader);
} else {
  console.log("Exercise 20 skipped: 'document' is not available in Node.js environment.");
}
