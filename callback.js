setTimeout(doSomething,2000);

function doSomething(){
    console.log("Demonstrating the callbacks");
}
console.log("The application is started");

//anynomous function
setTimeout(function(){
    console.log("Demonstrating the callbacks");
},2000);


console.log("The application is started");

//arrow function
setTimeout(()=>{
    console.log("Demonstrating the callbaks");
},2000);


console.log("The application is started");