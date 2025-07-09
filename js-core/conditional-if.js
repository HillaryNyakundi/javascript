let year = prompt("In whih year were you born?", "");

if (year == 2000) alert("You are right");

if (year == 2000) {
  alert(" you are smart");
  alert("you are correct");
}

//code under this condition will never execute
if (0) {
  //falsy
  alert("you are correct");
}

//code inside this condition will run
if (1) {
  //truthy
  alert("you are right yeah!");
}

//the else clause evaluates when the condition is falsy
let month = prompt(
  "In whic year/month was ECMAScript-2015 specification published",
  ""
);

if (year == 2015) {
  alert("You ae right btw");
} else {
  alert("How can you be wrong?");
}

//several conditions: else if

let days = prompt("how many days did i build the app latest?", "");

if (days < 5) {
  alert("too less");
} else if (days > 5) {
  alert("too many days bro");
} else {
  alert("now you got it right, it did take those days, yaeh");
}

//Assigning a variable depending on the condition
let accessAllowed;
let age = prompt("How old are you dude?");

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

//the ternary operator or question mark can do the the baove in simpler ways
let accessGrranted = age > 18 ? true : false;

//task
let value = prompt("Whats the official name of javascript?", "");

if (value == "ECMAScript") {
  alert("you are right");
} else {
  alert("you dont know? ECMAScript!");
}

//task 2
let num = promp("Type a number", 0);

if (num > 0) {
  alert(1);
} else if (value < 0) {
  alert(-1);
} else {
  alert(0);
}
// task 3

let result;

if (a + b < 4) {
  result = "Below";
} else {
  result = "Over";
}

// rewriting the above using the ternary operator
let newResult = a + b < 4 ? "Below" : "Over";
