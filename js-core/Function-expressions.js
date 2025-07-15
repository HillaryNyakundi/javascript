//function declaration
function sayHi() {
  alert("Hello");
}

//function expression
//create a function in the middle of any expression
let sayHi = function () {
  alert("Hello boy");
};

//copy a function to another variable
function buyCoffee() {
  alert("I have bought coffee");
}

let func = buyCoffee;

func(); //I have bought coffee
buyCoffee(); //I have bought coffee

//using an expression
let buyCoffee = function () {
  alert("I have bought coffee");
};

let sell = buyCoffee;

//callback functions
//The function should ask the question and, depending on the users answer, call yes() or no()

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("You agreed");
}

function showCancel() {
  alert("You canelled the execution");
}

//usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

//using function expressions
function tell(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree",
  function () {
    alert("You agreed.");
  },
  function () {
    alert("You cancelled the execution.");
  }
);

//function declaration
function sum(a, b) {
  return a + b;
}

//function expression
let sum = function (a, b) {
  return a + b;
};
