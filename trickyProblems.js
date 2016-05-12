---multiply a number by itself a certain amount of times---
function multiply(a, b) {
  var k = 1;
  for(var i = 0; i < b; i++) {
    k = k * a;
  }
  return k;
}

console.log(multiply(3, 3));

---Add 10 to numbers AND STRINGS!!---
var numbers = [5, '9', 16, 19, '25', '34', 48];
//Write a function called addTen that is given 'numbers' as it's only argument and returns a new
//array after adding ten to each item in numbers. *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]

function addTen(numbers) {
  var newArr = [];
  for(var i = 0; i < numbers.length; i++) {
    newArr.push(Number(numbers[i]) + 10);
  }
  return newArr;
}

---finding a number in an array and returning true if its there and false if its not---
// Write a function called 'findInArray' that takes in two parameters,
//the first representing the array to be searched and the second representing the value to be searched for.
//Return true if the value exists in the array. If it doesn't exist return false.

function findInArray(arr, b) {
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] === b) {
      return true;
    }
  }
  return false;
}

---Return a string reversed---

function reverse(str) {
  var arr = [];
  var a = str.split("");
  for(var i = a.length; i >= 0; i--) {
    arr.push(a[i]);
  }
  var j = arr.join('');
  return j;
}

---Loop through array and separate odds and evens---
var number = [1,2,3,4,5,6];

var evens = []; // Do not edit this line.
var odds = []; // Do not edit this line.

function oddsAndEvens(nums) {
  for(var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evens.push(nums[i]);
    }
    else {
      odds.push(nums[i]);
    }
  }
}
oddsAndEvens(number);
console.log(evens);

---Really hard way to find middle character in a string. middle two letters if even number of letters--
function getMiddle(str) {
  var a = [];
  if (str.length % 2 === 0) {
    for(var i = (str.length/2)-1; i <= str.length/2;i++) {
      a.push(str[i]);
    }
  }
  else if (str.length % 2 !== 0) {
   var b = Math.floor(str.length/2);
    for(var j = b; j <= b; j++ ) {
      a.push(str[j]);
    }
  }
  return a.join('');
}

console.log(getMiddle('apple'));

---Easy Way---
function getMiddle(s) {
  if(s.length % 2 === 0) {
    return s[(s.length/2)-1]+ s[s.length/2];
  }
  else{
    return s[Math.floor(s.length/2)];
  }
}
console.log(getMiddle('DevMountains'));


---Find longest word in a string---
function longest(sentence){
var parts = sentence.split(' ');
var longestWord = '';
for(var i=0; i < parts.length; i++){
    if(parts[i].length > longestWord.length){
        longestWord = parts[i];
    }
}
  return longestWord;
}
console.log(longest("hello my name is batman"))

---harder but better looking for interviews way to do it (longest word in string)---

function longestWord(str) {
    var words = str.split(' ');
    return words.reduce(function(previous, current) {
      return (current.length > previous.length) ? current: previous
    })
}

the last line of that i will breakdown.
return (current.length > previous.length) ? current: previous
functions like an if statement basicall if the statement in the parenthesis is true the the first value before the colon(current)
will be returned.  if the statement is false then the second value will be returned(previous);

condition ? expr1 : expr2
Parameters

condition=
An expression that evaluates to true or false.
expr1, expr2=
Expressions with values of any type.
Description=
If condition is true, the operator returns the value of expr1; otherwise, it returns the value of expr2.

if still confused check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator




---find out which letter in string of x's and o's (ex: "xxxoooxxo") has more/ see if they have the same amount---
function exOh(str) {
  var letter = str.split('');
  var xs = [];
  var os = [];
  for(var i = 0; i <letter.length;i++) {
    if(letter[i] === 'x') {
      xs.push(letter[i]);
    }else{
      os.push(letter[i]);
    }
  } if(xs.length === os.length) {
     return true;
  }else {
    return false;
  }
}

---capitalize the first letter OF EVERY WORD in a string(long way)---
function letterCapitalize(str) {
  var complete = [];
  var part = str.split(' ');
  for(var i = 0; i < part.length ;i++){
    var letter = part[i].split('');
    var first =letter[0].toUpperCase();
    letter.splice(0,1);
    var second =letter.join('');
    var comp = first + second;
    complete.push(comp);
  }var realDeal = complete.join(' ');
  return realDeal;
}

console.log(letterCapitalize('hello my name is jon'));
