function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200))

// Rest parameters
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000))

function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000))  // val1=200, val2=400, ...num1 = 500,2000

const user ={
    username: 'Rahul',
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)