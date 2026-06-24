/* 
   We will learn about escape sequences inside text strings
   in this page.
*/

// Escape Sequences (\n, \t, \', \")

/* 
   New Line (\n) - This acts like hitting the "Enter" key on your keyboard.
   It pushes any text after it down to a brand new line.

   Ex: 
*/
var greeting = "Hello\nWorld";

console.log(greeting); 
/* 
   prints:
   Hello
   World
*/

/* 
   Tab (\t) - This acts like hitting the "Tab" key on your keyboard.
   It inserts a big, clean space (indentation) inside your text.

   Ex: 
*/
var columnData = "Name:\tBhavish";

console.log(columnData); // prints: Name:   Bhavish

/* 
   Single Quote (\') - This allows you to safely use a single quote 
   inside a text string that is already wrapped in single quotes.

   Ex: 
*/
var dialogue = 'It\'s a beautiful day';

console.log(dialogue); // prints: It's a beautiful day

/* 
   Double Quote (\") - This allows you to safely use double quotes 
   inside a text string that is already wrapped in double quotes.

   Ex: 
*/
var quote = "He said, \"Coding is fun!\"";

console.log(quote); // prints: He said, "Coding is fun!"


// ===================================================================================================