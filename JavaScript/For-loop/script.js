let td = document.getElementById("data");
let x = "";
let table_number = prompt("enter your value to print the table")
let table_length = prompt("enter the value to end the table")

if(table_number && table_length){

    table_number = Number(table_number);
    table_length = Number(table_length);

    if(isNaN(table_number) || isNaN(table_length)){

        alert("value should be numeric")
        location.assign("index.html")

    }else{

        for(let initial=1;initial<=table_length;initial++){

            let rowColor = initial % 2 === 0 ? "even" : "odd";

            x+=`<tr class="${rowColor}">
                        <td>${table_number}</td>
                        <td>x</td>
                        <td>${initial}</td>
                        <td>=</td>
                        <td>${initial*table_number}</td>
                    </tr>`
    }
    td.innerHTML = x;
    
   }

}else{
    alert("fill all input")
    location.assign("index.html")
}