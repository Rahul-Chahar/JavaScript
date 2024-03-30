// Immediately Invoked Function Expression (IIFE)

// it used for to protect from global Scope polution and immeditaly execute

// before IIFE
// function chai(){
//     console.log(`DB connected`)
// }
// chai()

// After IIFE
// (function chai(){
//     console.log(`DB Connected`);
// })()
/**
 * () -> 1st used for function body
 * () -> 2nd used for execution like chai()
 */

// with arrow function
// (()=>
// console.log(`DB Connected`))()


// User two IIFE
// (function chai(){
//     console.log(`DB Connected`)
// })();
// // ; Whenever two IIFE's are used, it is compulsory to use a semicolon at the end. If not used, an error will occur. 
// (() =>
// {
//     console.log(`DB CONNECTED`)
// })()

// passing parameter
((name)=>
{
    console.log(`DB Connected two ${name}`);
})('Rahul')