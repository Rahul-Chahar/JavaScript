// # Primitive Data types
/*
7 types : String,Number,Boolean, null, undefined, Symbol, BigInt
*/
const score = 100; //number
const scoreValue =100.3; // number
const isLoggedIn =false // boolean
const outsideTemp = null // null
let userEmail; // undefined
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // output -> false;
// beacause of symbol, symbol store unique value.
const bignumber = 3456549549305n;
//Reference (Non preimitive) Data types
// Array, Objescts, Funtions
const heros = ["shaktiman","naagraj","doga"]
let myobj ={
    name:"Rahul",
    age:22,
}
const myFunction = function(){
    console.log("hello world"); 
}


//+++++++++++++++++++++++++++++++++++++++++++//

/**  Stack (Primitive),
 Heap (Non-Primitive) **/
 let myName ="Rahul"
 let anotherName = myName
 anotherName = "Gaurav"
 console.log(myName);
 console.log(anotherName);


 let userOne ={
    email:"rahul@google.com",
    upi:"rahul@ybl"
 }
 let userTwo = userOne
 userTwo.email ="gaurav@google.com"
 console.log(userOne.email);
 console.log(userTwo.email);