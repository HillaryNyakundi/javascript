//logical OR
alert(true || true); //true
alert(true || false); // true
alert(false || true); // true
alert(false || false); // false

if (1 || 0) {
  // works just like if(true || false)
  alert("truthy!");
}

// logical OR used in if statements to test if any of the given cinditions id true

let hour = 9;

if (hour < 10 || hour > 18) {
  alert("The office is closed.");
}

//&&(AND) Logical AND
//Returns true if both operands are truthy and false otherwise
alert(true && true); // true
alert(false && true); //true
alert(true && false); // false
alert(false && false); // false

let hourly = 12;
let minute = 30;

if (hourly == 12 && minute == 30) {
  alert("The time is 12:30");
}

//Just as with OR, nay value is allowed as an operand of AND

if (1 && 0) {
  alert("Wont Worker, because the result is falsy");
}

//dont replace if with || or &&
let x = 1;

x > 0 && alert("Greater than zero");

//!(NOT) logical NOT
result = !value;

//Converts the operand to boolean type ,, true or false
//Retuens the inverse value

alert(!true); //returns false
alert(!0); //returns true

//ASSIGNMENT, CHECK THE LOGIN
let userName = promp("Whos there", "");

if (userName == "Admin") {
  let pass = prompt("Enter password", "");
  if (pass == "TheMaster") {
    alert("welcome");
  } else {
    alert("Wrong password");
  }
} else if (userName === "" || userName === null) {
  alert("Canceled");
} else {
  alert("I dont know you please");
}

//Nullish coalescing '??'
//returns the first argument if its not null/undefined otherwise the second
result = A ?? A;
result = a !== null && b !== undefined ? a : b;

let user;

alert(user ?? "Anonymous"); //Anonymous, user is undefined

let person = Hillary;

alert(person ?? "Anonymous"); // Hillary, person is not null or undefined

//omparison with ||
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

//show the first truthy value
alert(firstName || lastName || nickName || Anonymous);

if (age >= 14 && age <= 90)

if (!(age >= 14 && age <= 90))

if(age < 14 && age > 90)


let userName = prompt('Who is there?', '')

if(userName == 'Admin'){

  let pass = prompt('Enter your password?', '')

  if(pass = 'TheMaster') {
    alert('welcome')
  } else if(pass === '' || pass === null) {
    alert('canceled');
  } else {
    alert('wrong password')
  }
} else if (userName === '' || userName === null) {
  alert('Canceled')
} else {
  alert("I dont know you")
}

//nullish coalescing operator '??'
result = a ?? b

result = (a !== null && b !== undefined) ? a : b;

let user;

//show the uaer if its value isn't null/uundefined, otherwise Anonymous
alert(user ?? 'anonymous');

let user = 'John'

alert(user ?? 'Anonymous');

let firstName = null;
let lastName = null;
let nickName = 'Nyakundi';

//show the first defined value
alert(firstName ?? lastName ?? nickName ?? 'Anonymous')

let firstName = null;
let lastName = null;
let nickName = 'Supercoder'

//show the first truthy value
alert(firstName || lastName || nickName || "AnonymousS")

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area)