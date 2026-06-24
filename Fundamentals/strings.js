/* 
   We will learn about Template Literals (Backticks)
   and String Interpolation (${}) in this page.
*/

// The Old Way vs The New Way

/* 
   The Old Way (Using Plus Signs) - This is like gluing puzzle pieces together.
   You have to open and close quotes constantly and add '+' signs.
   It is very easy to miss a space or make a syntax error.

   Ex: 
*/
var name = "Bhavish";
var score = 95;

var oldWay = "Hey " + name + ", you scored " + score + " points!";

console.log(oldWay); // prints: Hey Bhavish, you scored 95 points!

/* 
   The New Way (Using Backticks ` and Placeholder ${}) - This is like filling out a form.
   You write the whole sentence naturally inside backticks. 
   Wherever you want a variable, you just drop a ${variable_name} placeholder.

   Ex: 
*/
var newWay = `Hey ${name}, you scored ${score} points!`;

console.log(newWay); // prints: Hey Bhavish, you scored 95 points!

/* 
   Deep Dive: Math Inside The Placeholder - The ${} placeholder doesn't just hold variables.
   It can actually run calculations directly inside the string!

   Ex: 
*/
var price = 50;
var tax = 5;

var totalReceipt = `The final total is: ${price + tax} dollars.`;

console.log(totalReceipt); // prints: The final total is: 55 dollars.


// ==========================================================================================================