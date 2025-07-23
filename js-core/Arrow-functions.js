//Arrow functions
let sum = (a, b) => a + b;
alert(sum(1, 2));

//if we have one argument then parenthesis around parameters can be omitted

let double = (n = n * 2);

alert(double(3));

//no argument then parentesis are empty
let sayHi = () = alert("Hello");

sayHi();

//Arrow functions can be used in the same way as Function expressions to dynamically create a fuction
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ? () => alert('Hello!') : () => alert("Greetings!");

welcome();

//Multiline Arrow functions
let sum = (a, b) => {
    let result = a + b;
    return result;
};

alert(sum(1, 2));

//rewrite using arrow functions
function ask(question, yes, no){
    if(confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    ()=>alert("You agreed."),
    () =>alert("You cancelled the execution.")
)

