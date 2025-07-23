//loops area way to repeat the same code several times

//The while loop
while (consition) {
  //code
  //loop body
}

let s = 0;
while (s < 3) {
  // show 0, then 1, then 2
  alert(1);
  i++;
}

let i = 3;
while (i) {
  //when i becomes 0, the condition becomes falsy
  alert(i);
  i--;
}

let r = 3;
while (r) alert(i--);

//do... while loop
do {
  // loop body
} while (condition);

let k = 3;
do {
  alert(k);
  k++;
} while (k < 3);

//for loop
for (begin; condition; step) {
  //loop body
}

for (m = 0; m < 3; m++) {
  alert(m);
}

//Tasks
let p = 3;

while (p) {
  alert(p--);
}

//Output even numbers in the loop
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}

//rewrite this using the while loop
for (let i = 0; i < 3; i++) {
  alert(`number ${i}`);
}

let y = 0;
while (y < 3) {
  alert(`number ${i}`);
  i++;
}

//Repeat until the input is incorrect
let num;

do {
  num = prompt("Enter a number greater than 100", 0);
} while (num <= 100 && num);

//output prime numbers
let n = 10;

nextPrime: for (let i = 2; i <= n; i++) {
  // for each i...
  for (let j = 2; j < i; j++) {
    // look for a divisor
    if (i % j == 0) continue nextPrime;
  }

  alert(i); // a prime
}

//for (let i = 0; i < 3; i++)

//run begin
let i = 0;
// if condition, run bodyand then run step
if (i < 3) {
  alert(i);
  i++;
}
// if condition , run bodyand then run step
if (i < 3) {
  alert(i);
  i++;
}
//if condition, run body and then run step
if (i < 3) {
  alert(i);
  i++;
}
// finish, because now i == 3

for (let i = 0; i < 3; i++) {
  alert(i); // 0, 1,2
}
alert(i); //error, no such variable

let i = 0;

for (i = 0; i < 3; i++) {
  alert(i); //0, 1,2
}

alert(i); //3. visible beacuse declared outside of the loop

let sum = 0;

while (true) {
  let value = +prompt("Enter a number", "");

  if (!value) break;

  sum += value;
}
alert("Sum:" + sum);

//continue to the next iteration
for (let i = 0: i < 10; i++){

  //if true, skip the remaining part of the body
  if(i % 2 == 0) continue;

  alert(i);// 1, then 3, 4, 5,6, 7, 9
}

for(let i = 0; 1 < 10; i++) {
  if (i % 2) {
    alert(i)
  }
}
