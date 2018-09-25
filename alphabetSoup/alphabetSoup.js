/* 
Write a function alphabetSoup(str) that takes a string and returns a string with
the letters in alphabetical order. Assume the input will not contain numbers or punctuation.
Hint: Check out split(), sort() and join() methods at 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

Bonus:
If there are spaces in the input, do not include them in the result.
Hint: Check out trim() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
*/

/**
Examples:

var result = alphabetSoup("hello");
console.log(result) // "ehllo"

var result = alphabetSoup("");
console.log(result) // ""

var result = alphabetSoup("f");
console.log(result) // "f"

var result = alphabetSoup("my string");
console.log(result) // " gimnrsty"

Bonus:
var result = alphabetSoup("my string oh my");
console.log(result) // "ghimmnorstyy"

**/

//inputs: string  - input parameter
//outputs: string with letters in alphabetical order
//purpose: to sort individual characters alphabetically


function alphabetSoup(str) {
	//turn the string into an array of characters, using split, then store the resulting array in a variable, *** the split method takes in delimiter ---""
	//Sort the array 
	//Join the elements in the array back into a string, the argument for the .join() method will be ""
	//Get rid of the spaces in the string using trim
	function alphabetSoup(str) { 
		var arraySplit = str.split("");
		var arraySort = arraySplit.sort();
		var arrayJoin = arraySort.join("");
			var arrayTrim = arrayJoin.trim();
		return arrayTrim;
	}
}
	console.log(alphabetSoup("jd fhbl or ogh"));
	
	
