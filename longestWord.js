//Find the Longest Word in a String

//Return the length of the longest word in the provided sentence.

//Your response should be a number.

//Here are some helpful links:

//String.split() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//String.length https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

//TEST CASES
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWord("May the force be with you") should return 5.
// findLongestWord("Google do a barrel roll") should return 6.
// findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.

//input: string of words
//output: a number, letting us know the number of characters in the longest word in the string
//purpose: to be able to count characters of single words within a multi-word string, and to find the longest word
//For loop to loop through an array of words
  //Conditional statment to test to see the new word we are testing is longer then the word stored in our variable, if it is replace it with the new word
//return the varibale storing the longest word


function findLongestWord(str) {
  var wordArray = str.split(' ');
  var longestWord = 0;
  for(var i = 0; i < wordArray.length; i++){
    if(wordArray[i].length > longestWord){
	longestWord = wordArray[i].length;
     }
  }
  return longestWord;
}

var result = findLongestWord("The quick brown fox jumped over the lazy dog");
console.log(result);
