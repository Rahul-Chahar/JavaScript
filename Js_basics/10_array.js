// array

const myArr = [0,1,2,3,4,5]
const myHeors = ["shaktiman","naagraaj"]
const myArr2 = new Array(1,2,3,4)
// console.log(myHeors[0]);

// Array methods

// myArr.push(6)  //add element
// myArr.push(7)
// myArr.pop()  // Remove last element

myArr.unshift(9)  // add element at starting
myArr.shift()  //Remove First Element

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(5));

const newArr = myArr.join()  //Join used for convert in string
console.log(myArr)
console.log(newArr)

// slice , splice
/**
 * Slice -> Ye original Array koh manipulate nahi karta hai
 * 
 * splice -> Ye orignial array koh manipulate karta hai
 */
// console.log("A ",myArr)
const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
// console.log(myn2);
// console.log("C ", myArr);