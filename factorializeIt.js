//Challenge time! 
//Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Check out Arithmetic Operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators


//input: a number
//output: a number; the factorial of the input number
//purpose: so that you can come up with different combinations of things; 
//create a new variable, that will store the output
//create a for loop, the loop will run from 1 to the value of the inout number
//multiply the value of our new variable by the current value of i (aka our counter)
//return 
function factorializeIt(num) {
  var factorialized = 1; 
  for(var i =1; i<= num; i++){
    factorialized *=i;
  }
  return factorialized;
}


var result = factorializeIt(4); 
console.log(result);


