const userEmail ="r@hul.ai"
if(userEmail){
    console.log("Got user email")
} else {
    console.log("Don't have user email")
}

// falsy values
// false, 0, -0, BigInt 0n, "", undefined, NaN 

// truthy values
// "0", 'false', " ",[],{},function(){}



// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 =5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
console.log(val1)


// Terniary Operator 
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice>=80 ? console.log("less than 80") : console.log("more than 80")