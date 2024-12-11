let firstvalue = prompt("enter 1st value")
let arthmeticOperater = prompt("for arthmetic operations enter + or - or * or /")
let secondvalue = prompt("enter 2nd value")


if(arthmeticOperater == "+"){
    var result = parseInt(firstvalue) + parseInt(secondvalue)
    alert(result)
    document.write(`<h3 style="color:black">"The Result Is (${result})"</h3>`)
}
else if(arthmeticOperater == "-"){
    if(firstvalue > secondvalue){
        var result = parseInt(firstvalue) - parseInt(secondvalue)
        alert(result)
        document.write(`<h3 style="color:black">"The Result Is (${result})"</h3>`)
    }else{
        alert("first value must be greater than second value")
    }
}
else if(arthmeticOperater == "*"){
    var result = parseInt(firstvalue) * parseInt(secondvalue)
    alert(result)
    document.write(`<h3 style="color:black">"The Result Is (${result})"</h3>`)
}
else if(arthmeticOperater == "/"){
    if(secondvalue > 0){
        var result = parseInt(firstvalue) / parseInt(secondvalue)
        alert(result)
        document.write(`<h3 style="color:black">"The Result Is (${result})" </h3>`)
    }else{
        alert("second value must be greater than 0")
    }
}
else if(arthmeticOperater == typeof(Number)){
    alert("please enter correct arthmetic operators")
}
else{
    alert("please fill all fields")
}
