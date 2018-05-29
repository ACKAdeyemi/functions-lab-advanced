// 1. Write a function called 'multiply' that multiplies two numbers and returns the result
function multiply (num1,num2) {
  return num1 * num2;
}

// 2. Write a function called 'addThree' that adds three numbers together and returns the result
function addThree (num1,num2,num3) {
  return num1 + num2 + num3;
}

// 3. Write a function called 'smallestNumber' that returns the smaller of 2 numbers
function smallestNumber (num1,num2) {
  return Math.min(num1,num2);
}

// 4. Write a function called 'maxOfThree' that returns the largest of 3 numbers
function maxOfThree (num1,num2,num3) {
  return Math.max(num1,num2,num3);
}

// 5. Write a function called 'reverseString' that returns the reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// 6. Write a function called 'disemvowel' that returns the vowels from the string parameter
function disemvowel (str) {
  // var vowels = ['a', 'e', 'i', 'o', 'u'];
  // return str.split('').filter(function(el) {
  //   return vowels.indexOf(el.toLowerCase()) == -1;
  // }).join('');
  return str.replace(/[aeiou]/gi, "");
}

// 7. Write a function called 'removeOdd' that removes all ODD number from an array
// function removeOdd(arr) {
//   var out = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (! (arr[i] % 2)) {
//         arr[out++] = arr[i];
//     }
//   }
//   arr.length = out;
//   return arr;
// }
// MIMI'S VERSION
function removeOdd(arr) {
  return arr.filter(function(val){
    return val % 2 === 0;
  })
}

// 8. Write a function called 'removeEven' that removes all EVEN number from an array
// function removeEven(arr) {
//   var out = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2) {
//         arr[out++] = arr[i];
//     }
//   }
//   arr.length = out;
//   return arr;
// }
// JACK'S VERSION
function removeEven(arr) {
  return arr.filter(function(val){
    return val % 2 === 1;
  })
}


// 9. Write a function called 'longestString' that takes an array of strings and returns the string with the longest character length
// function longestString (arr,longest) {
//   var longest = arr.sort(function (a, b) { return b.length - a.length; })[0];
//   return longest;
// }
// BEN'S VERSION
// function longestString (arr) {
//   var longestWord = ""; // empty string
//
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i].length > longestWord.length) {
//       longestWord = arr[i];
//     }
//   }
//   return longestWord;
// }
// NICK'S VERSION
function longestString (arr) {
  var longestWord = arr.reduce((a, b) => { //arrow function and turnary operators
    return b.length > a.length ? b : a; });
  return longestWord;
}

// 10. Write a function called 'allElementsExceptFirstThree' that discards the first 3 elements of an array,
// e.g. [1, 2, 3, 4, 5, 6] becomes [4, 5, 6]
function allElementsExceptFirstThree (arr) {
  for (var i = 0; i < 3; i++) {
    arr = arr.splice(1);
  }
  return arr;
}
// JACK'S VERSION
function allElementsExceptFirstThree (arr) {
  return arr.splice(3, arr.length - 3);
}

//#### BONUS ####

// 11. Write a function called 'convertArrayToAnObject' that turns an array (with an even number of elements) into a hash, by
// pairing up elements. e.g. ['a', 'b', 'c', 'd'] becomes
// {'a' => 'b', 'c' => 'd'}


// 12. Write a function called 'fizzBuzz' that takes any number and returns a value based on these rules

// But for multiples of three print "Fizz" instead of the number
// For the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
