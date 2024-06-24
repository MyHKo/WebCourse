'use strict!'
let login = prompt("Enter login:");
if(login == null) {
  alert("Canceled");
} else if(login != "Admin") {
  alert("I don't know you!");
} else {
  let password = prompt("Give me the password");
  if(password == null) {
    alert("Canceled");
  } else if(password != "TheMaster") {
    alert("Access denied!");
  } else {
    alert("Hello Master");
  }
}
