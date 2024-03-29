// Creations of Object their is two tpes
/**
 * 1st Singletion-->
 * Object.create --> construction method --> singletion
 * 2nd Object literals
 */
// object literals
const mySym =Symbol("key1")
const JsUser = {
    name: "Rahul",
    "full name": "Rahul Chahar",
    [mySym]: "mykey1",
    age: 19,
    location: "Mathura",
    email: "rahul@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym])
// console.log(JsUser["full name"])

JsUser.email ="rahul@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "rahul@microsoft.com"
// console.log(JsUser)

// JsUser.greeting = function(){
//     console.log("Hello js user")
// }
// JsUser.greetingTwo = function(){
//     console.log(`hello Js user,${this.name}`)
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo())
