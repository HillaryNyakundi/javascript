let vakue = true;
alert(typeof value); // boolean

value = String(value); // now vallue is a string "true"
alert(typeof value); //string

alert("6" / "2"); // stringas are converted to numbers

let str = "123";
alert(typeof str);

let num = Number(str); //becomes a number 123

alert(typeof num);

let age = Number("an arbitrary string instead of a number");

alert(age); //NaN, conversion failed

let n = 2;
n = n + 5;
n = n * 2;

n += 5;
n *= 2;

let counter = 2;
counter++;
alert(counter); //3

let counter = 2;
counter--;
alert(counter); //1

counter++;
++counter;

alert(2 > 1);
alert(2 == 1);
alert(2 != 1);

let result = 5 > 4;
alert(result);

const messageText = "Welcome to Nyakundi chat";
let isBirthday = true;

if (isBirthday) {
  const messageText = "Happy birthday";

  console.log("Sending birthday message");
  console.log("mesage", messageText);
}

console.log("sending welcom message");
console.log("message", messageText);
