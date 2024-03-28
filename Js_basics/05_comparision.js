// console.log(2>1); // true
// console.log(2>=1); //true
// console.log(2<1); //false
// console.log(2==1); // false
// console.log(2!=1); // true

// console.log("2">1); //true
// console.log("02">1); //true

// console.log(null>0); //false
// console.log(null==0); //false
// console.log(null>=0); //true

//Note
/*
The reason is that an equality check == and comparisons ><>=<= work differently.
Comparison convert null to a number, treating it as 0.
That's why (3)null>=0 is true and (1)null>0 is false.
*/

// === (Strict check)
console.log("2"===2); //false