function reverse(word) {
  //'abc' => 'cba'
  // const wordArray = word.split("");
  // const reversedWordArray = wordArray.reverse();
  // const reversedWord = reversedWordArray.join("");
  // return reversedWord;
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // Write your algorithm here

  // reverse the input string
  const reversedWord = reverse(word);
  // if the input is the same as the reverse input
  return word === reversedWord;
}

/* 
  Add your pseudocode here
that means if the word is the same as the word in reverse, I should return true.

reverse the input string

if the input is the same as the reverse input
  return true
else
  return false

*/

/*
  Add written explanation of your solution here


  Create a function isPalindrome that accepts an argument that accepts a string
  Write an if statment that returns true if palindrome returns true and false if palindrome returns false.
  
  In order to reverse a string, we have to turn it into an array. 
  To do so, write a function to reverse string:
 
  Write a function reverse that accepts a string as an argument // => ("abc")
    return word
        .split() to turn the string into an array // => ["a", "b", "c"]
        then follow it with .reverse() to reverse the order of the array // => ["c", "b", "a"]
        then use the .join() method to join all elements of the array including ("") to convert it back to a string // => "cba"
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("pop"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("li"));
}

module.exports = isPalindrome;
