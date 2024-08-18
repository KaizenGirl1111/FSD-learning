// JavaScript source code

console.log(2)
function addAsync(let a, let b, let callback) {
    let sum = a + b;
    setTimeout(() => console.log(sum), 2000)
}
//in callbacks and aysnc functions
//eg
function callback(sum) {
    console.log(sum)
}

addAsync(2, 3, callback)
console.log(6)

//--> 2, 6, 5 //non blocking