let lines = prompt("Enter The Number of Lines You Want")

for( let i=1; i<=lines; i++ ){
    let tree = "";
    for( let j = 1; j <= lines-i; j++){
        tree += " ";
    }
    for( let k = 1; k <= i; k++){
        tree += " *";
    }
    console.log(tree);
}
