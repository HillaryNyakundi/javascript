function showMessage() {
  alert("Hello everyone here my name is jakes");
}

showMessage();

//variables are local to the function
function me() {
  let name = "Hello, I am Hillary Nyakundi";
  alert(name);
}

me(); //Hello, I am Hillary
alert(message); //Error! the variable is local to the function

//outer variables
let userName = "Hillary";

function sayHello() {
  let greeting = "Hello" + userName;
  alert(greeting);
}

sayHello();

//parameters
//we can pass arbitrary data to functions using parameters
function sayMorning(from, text) {
  alert(from + ":" + text);
}

sayMorning("Hillary", "Morning!");
sayMorning("Christine", "GoodMorning");

//returning a value
//A function can return a value back into the calling code as the result
function sum(a, b) {
  return a + b;
}

let result = sum(6, 7);
alert(result); // 14

//check age with many return occurrences
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Do you have permission from your parents");
  }
}

let age = prompt("How old are you?", 18);

if (checkAge(age)) {
  alert("Access granted");
} else {
  alert("Access denied");
}

//rewrite the function using '? or '||'
function checkTime(time) {
  if (time > 12) {
    return true;
  } else {
    return comfirm("Is it really time for lunch?");
  }
}

function checkTime(time) {
  return time > 12 ? true : confirm("Is it really time for lunch");
}

function checkTime(time) {
  return time > 12 || confirm("Is it realy time for lunch lads, eeh");
}

//fUNCTION MIN(a, b)
//write a function min(a, b) which returns the least of the two numbers a and b

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function max(a, b) {
  return a > b ? a : b;
}

//square root
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result = result * x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert(pow(x, n));
}
