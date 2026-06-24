/* 
   We will learn about declaring, initializing and assigning a variable
   in this page.
*/

// Declaration vs Assigning vs Initialization

/* 
   Declaration - Declaration is like you tell the computer to save a new slot 
   or to create a new box or placeholder, but you don't fill anything inside the box. 

   Ex: 
*/
var name;

// "Name" variable has just been created but nothing has gone inside of it.

/* 
   Assigning - Assigning is like filling the box with something. 
   Now you keep something inside the box. 

   Ex: 
*/
name = "bhavish";

console.log(name); // prints "bhavish" because a string value is assigned to the variable

/* 
   Initializing - Initializing is like creating a variable, 
   but not keeping it empty as soon as it is created. 

   Ex: 
*/
var last_name = "reddy";

// You're creating and also assigning at the same time.


// =====================================================================================================================================


/* 
   We will learn about incrementing and decrementing variables
   in this page.
*/

// Incrementing vs Decrementing

/* 
   Incrementing (++) - Incrementing is like adding exactly one more item into your box.
   It takes the current number and bumps it up by 1.

   Ex: 
*/
var score = 10;
score++; 

console.log(score); // prints 11 because we added 1 to the score

/* 
   Decrementing (--) - Decrementing is like taking exactly one item out of your box.
   It takes the current number and drops it down by 1.

   Ex: 
*/
var lives = 3;
lives--; 

console.log(lives); // prints 2 because we subtracted 1 from the lives
// =======================================================================================================================================

/* 
   We will learn about compound assignment operators
   using completely new examples.
*/

// Compound Assignment Operations (+=, -=, *=, /=)

/* 
   Compound Addition (+=) - This takes the current value and adds a new amount to it.
   It is a shortcut for: total = total + 15.

   Ex: 
*/
var price = 100;
price += 15; 

console.log(price); // prints 115 because 100 + 15 = 115

/* 
   Compound Subtraction (-=) - This takes the current value and removes an amount from it.
   It is a shortcut for: total = total - 5.

   Ex: 
*/
var speed = 60;
speed -= 5; 

console.log(speed); // prints 55 because 60 - 5 = 55

/* 
   Compound Multiplication (*=) - This scales up your value by multiplying it.
   It is a shortcut for: total = total * 3.

   Ex: 
*/
var dailySteps = 2000;
dailySteps *= 3; 

console.log(dailySteps); // prints 6000 because 2000 * 3 = 6000

/* 
   Compound Division (/=) - This splits your value by dividing it evenly.
   It is a shortcut for: total = total / 2.

   Ex: 
*/
var batteryPercent = 80;
batteryPercent /= 2; 

console.log(batteryPercent); // prints 40 because 80 / 2 = 40


// =========================================================================================================================================================



