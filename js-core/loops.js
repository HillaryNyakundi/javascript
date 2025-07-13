//loops area way to repeat the same code several times

//The while loop
while (consition) {
  //code
  //loop body
}

let i = 0;
while (i < 3) {
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

let i = 3;
while (i) alert(i--);

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
let i = 3;

while (i) {
  alert(i--);
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

let i = 0;
while (i < 3) {
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
