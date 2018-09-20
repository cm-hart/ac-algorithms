//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 

// function circleCalculation (radius) {
// 	//your code here

// circleCalculation(10);

//Input: radius, a number
//Output: a value of the calculation or the string/sentence if you decide to use the 

//First thing we did is add the radius as the parameter for our function
//The problem with MY code (below) is that I used more than one function
var radius = prompt("What is the radius of your circle?");

function calculateCircumference(radius) {
	//Second, we calculate the area of the circle
//Third, we calculate the perimeter
//Fourth you need store the value in a variable
//Fifth, we return the value of these calculations
  return 2 * Math.PI * radius;
}

function calculateArea(radius) {
  return Math.PI * radius^2;
}

console.log(parseInt(calculateCircumference(radius)));

console.log(parseInt(calculateArea(radius)));

console.log("The area of the circle is " + calculateArea(radius) + " and the perimeter of the circle is " + parseInt(calculateCircumference(radius)));


function circleCalculation(radius) {
	var area = Math.round(Math.PI * Math.pow(radius, 2));

	var perimeter = Math.round(2 * Math.PI * radius);

	var sentence = "The area of the circle is " + area + " and the perimeter if the circle is " + perimeter + ".";
	//return the value of those calculations OR return sentence
	return sentence;
}

var value = circleCalculation(10);
console.log(value);