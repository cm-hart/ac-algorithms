/*

Given a number, insert dashes ('-') between each two odd numbers and return it as a string
Remember 0 is an even number. Assume the input will contain at least 1 digit.

Hint: Check out toString() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

*/

/**
Examples:

var result = dashInsert("454793");
console.log(result) // "4547-9-3"

var result = dashInsert("44");
console.log(result) // "44"

var result = dashInsert("0");
console.log(result) // "0"

var result = isBigger("13");
console.log(result) // "1-3"

**/

//input: a string of numbers that contains at least one digit
//output: a string, also with numbers but with dashes this time, between any two odd numbers
//purpose: to insert dashes at specific places in a string

//Split the string into an array of numbers
//Store the array in a variable
//Create a variab;e to store the output of the loop
//Create a for loop that loops through the numbers (aka, the elements in the array)
//	//Conditional statement that sees if the number we are 			looking at and the number that comes next in te array are both odd
		//if they are, we want to add the number itself and a dash to the variable storing the output
//Return the string, aka the variable storing the output of the string

function dashInsert(str) {
	var arrayNumbers = str.split("")
	var newString = "";
	for (var i = 0; i < arrayNumbers.length; i++){
		if(arrayNumber[i] % 2 === 1 && arrayNumber[i + 1] % 2 === 1){
			newString = newString + arrayNumbers[i] + "-";
		} else {
			newSrting = newString + arrayNumbers[i];
		}
	}
	return newString;
}