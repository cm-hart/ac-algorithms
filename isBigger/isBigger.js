/*
Given two numbers, a, b, as inputs, return true if a > b,
return false if a < b, return 0 otherwise.

Bonus 1: If a or b is undefined or not a number, then return -1.
Hint: Chekout typeof() operator at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

*/

/**
Examples:

var result = isBigger(3,4);
console.log(result) // false

var result = isBigger(13,4);
console.log(result) // true

var result = isBigger(4.00001,4);
console.log(result) // true

var result = isBigger(4,4);
console.log(result) // 0

var result = isBigger("potato",4);
console.log(result) // -1

var result = isBigger("4",4);
console.log(result) // -1

var result = isBigger(3);
console.log(result) // -1

var result = isBigger();
console.log(result) // -1

**/

//inputs are two numbers a, b; these are the parameters
//outputs are true, false, 0 or -1;
//purposr: evaluate a and b to see if theu are numbers, and how they compare to one another (ie, if one is bigger)



var result = parseInt(prompt(""))

function isBigger(a, b) {
	//conditional statement to test if a > b
	//test if a < b
	//if a === b
	//if a or be are not numbers
	var result = '';
	if (typeof a === "number" && typeof b === "number") {
		if ( a > b ) {
			result = true;
		} else if ( a < b ){
			result = false;
		} else {
			result = 0;
		}
	} else {
		result = -1
	}
	
	return result;
}
	

isBigger(3, 4);

