let firstName = prompt("Enter Your First Name");
let lastName = prompt("Enter Your Last Name");
let age = prompt("Enter Your Age");
let qualification = prompt("Enter Your Qualification");

if( !firstName || !lastName || !age || !qualification ){
    alert("Fill All The Inputs");
    location.assign("index.html");
}else{
    alert("Your Application Has Been Submitted");
}