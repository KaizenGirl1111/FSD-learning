let arr=[6,8,9,10]
let newarr = arr.map(test)
function test(element,index){
	console.log(element*2);
}
//console.log(newarr)

setTimeout(test,10000)
//document.addEventListener('keyup',test)

function callingback(func,name){
	console.log(name,func)
}
callingback(test,"Avni")

function cbk(name){
	console.log("My name is: ",name)
}
//totally using callback insde a function
function greet(name,callback){
	callback(name)
}
greet("Avni",cbk)

//print sum of 2 numbers by callback

function cbk1(a,b){
	console.log(a+b)
}
function add(a,b,callback){
	callback(a,b)
}
add(4,89,cbk1) //callback means pass function as a parameter , then ONLY it is called callback, cbk1 is calledback in main function of
//CALLBACK INSIDE A CALLBACK
function newFunction(fname,callback){
	console.log("Hello from new name",fname)
	callback(fname)
}

function displayName(name){
	console.log("Name is ",name)
}

setTimeout(newFunction,15000,"Avni",displayName)