let a = 2 + 2;

switch (a) {
  case 3:
    alert("Too small");
    break;
  case 4:
    alert("Exactly");
    break;
  case 5:
    alert("Too big");
    break;
  default:
    alert("I dont know such value");
}

//Rewrite he switch statement into an "if";
switch (browser) {
  case "Edge":
    alert("You have got the Edge!");
    break;

  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    alert("okay we support these browsers too");
    break;

  default:
    alert("We hope that this page looks ok!");
}

if (browser == "Edge") {
  alert("You have gorr the edge");
} else if (
  browser == "chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("we hope this page looks good okay");
}
