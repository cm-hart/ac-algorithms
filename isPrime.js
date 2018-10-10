/*

Given a number between 1 and 2^16, return true if the number is prime, return false if it is not.
Remember 2 is a prime number and 1 is not.

Hint: You may not need to check numbers up to num to check for primeness.

*/

/**

Examples:

var result = isPrime(1)
console.log(result) // false

var result = isPrime(2)
console.log(result) // true

var result = isPrime(3)
console.log(result) // true

var result = isPrime(4)
console.log(result) // false

var result = isPrime(29)
console.log(result) // true

var result = isPrime(51)
console.log(result) // false

**/
// input:
//output: 
//purpose: for loop that starts at 1 & goes up to the input number 
	//conditional statement to check if the number is a 1 or a 2;
	//conditional statement: checks if the input number us divisible by i with 0 as it's remainder, if true, we want it to return false
	//In else statement, return true
function isPrime(num) {
	if (num === 1) {
		return false; 
	}
	if (num ===2){
		return true;
	}
	for (var i = 2; i< num; i++){
		if (num % i === 0){
			return false;
		}
	}
	return true;
}