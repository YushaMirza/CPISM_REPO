
let terms = prompt("Enter The Number of Terms in Fibonacci Series");

let fibSeries = [0, 1];

for( let i=2; i<terms; i++ ){
    fibSeries[i] = fibSeries[i-1] + fibSeries[i-2];
}
document.write(fibSeries);

