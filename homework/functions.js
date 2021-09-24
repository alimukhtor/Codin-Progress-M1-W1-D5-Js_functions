/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
let area = function(l1, l2){
  let result = l1*l2
  return "The area of given two number is : " + result
}
area(2, 4)
console.log(area(2, 4));


// ===========================================================================


/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

let crazySum = function(int1, int2){
  if(int1 === int2){
    return (int1+int2)*3;
  }else{
    return int1+int2;
  }
}
crazySum(3, 2)
console.log(crazySum(3, 2));


// ==================================================================

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/
let crazyDiff = function(givenNum){
  if(givenNum > 19){
    return ((givenNum-19)*3);
  }else{
    return false
  }
}
crazyDiff(20)
console.log(crazyDiff(20));


// =============================================================


/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

let boundary = function(n){
  if(n > 20 && n < 100 || n === 400){
    return true
  }else{
    return false
  }
}
boundary(50)
console.log(boundary(50));

// =========================================================


/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

let strivify = function(myString){
  if(myString === "Strive"){
    return myString
  }else{
    return myString + " " + "Strive"
  }
}
strivify("Hello")
console.log(strivify("Hello"));



// =====================================================


/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

let check3and7 = function(posNum){
  if(posNum > 0 && posNum%3 == 0){
    return "Our positive number " + posNum + " is a multiple of 3 "
  }else if(posNum > 0 && posNum%7 == 0){
    return "Our positive number " + posNum + " is a multiple of 7 "
  }else if(posNum > 0 && posNum%7 == 0 && posNum%3 === 0){
    return "Our positive number " + posNum + " is a multiple of both 3 and 7 "
  }else{
    return "Sorry u sucked :)"
  }
}
check3and7(23)
console.log(check3and7(23));

// ========================================================


/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
let reverseString = function(revString){
  let splitString = revString.split("")
  let reverseArray = splitString.reverse()
  return reverseArray
}
reverseString("Strive")
console.log(reverseString("Strive"));


// =========================================================
/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

let upperFirst = function(upperFirstString){
  let upperCase = upperFirstString.toUpperCase()
  return upperCase
}
upperFirst("mukhtorov")
console.log(upperFirst("mukhtorov"));



// ===========================================================

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

let cutString = function(loserCharString){
  anotherString = loserCharString.slice(1, -1)
  return anotherString
}
cutString("Strive")
console.log(cutString("Strive"));


// ========================================================

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
let giveMeRandom = function(n){
  let arrayOfNumbers = []
  for(let i = 0; i < n; i++){
    arrayOfNumbers.push(Math.floor(Math.random() * 10))
    return arrayOfNumbers
  }
}
 giveMeRandom(7)
 console.log(giveMeRandom(7));
