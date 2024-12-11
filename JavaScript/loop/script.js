let initial = prompt("enter the number to start the loop");
let end = prompt("enter the number to end the loop");

if( !initial ){
    alert("fill the input please");
}
else if( isNaN(initial) || isNaN(end) ){
    alert("please enter the numeric")
}
else if( initial > end || initial == end ){
    alert("initial should be less then termination number")
}else{
    while( initial <= end ){
        let d = document.getElementById("data")
        d.innerHTML +=`<h3> Your iteration count is = ${initial}</h3>`;
        initial++;
    }
}