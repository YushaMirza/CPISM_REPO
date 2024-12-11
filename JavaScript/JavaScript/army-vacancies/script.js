let firstname = prompt("enter your first name")
let lastname = prompt("enter your last name")
let age = prompt("enter your age")
let qualification = prompt("enter your qualification")

if( !firstname || !lastname || !age || !qualification ){
    alert("fill all the fields")
    location.assign("index.html")
}
else{
    alert("your application has been submitted")
}
document.write(`your first name is : ${firstname}`)
document.write(`your last name is : ${lastname}`)
document.write(`your age is : ${age}`)
document.write(`your qualification is : ${qualification}`)