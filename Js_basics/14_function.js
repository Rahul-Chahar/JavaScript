// function

function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("H");
    console.log("U");
    console.log("L");
}
//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2)
// }
// addTwoNumbers(3,4)

function addTwoNumbers(number1,number2){
    return number1+number2
}
let result = addTwoNumbers(5,3)
// console.log(`Result is ${result}`)

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Rahul"))