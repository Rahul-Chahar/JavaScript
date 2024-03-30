// foreach return nahi karta 
// filter return karta hai

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums =myNums.filter((num)=> num>4)
console.log(newNums)

const myNumber =[1,2,3,4,5,6,7,8,9,10]
const res =myNumber.map((nums)=>(nums+10))
console.log(res)

const numberEg =[1,2,3,4,5,6,7,8,9,10]
const result = numberEg.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>29)
console.log(result)






// Reduce

const myNums1 =[1,2,3]
// const myTotal =myNums1.reduce(function(acc,curval){
//     console.log(`acc: ${acc} and curval: ${curval} `)
//     return acc + curval
// },0)

// using Arrow function
const myTotal =myNums1.reduce((acc,curval)=>{
    return acc + curval
},0)
console.log(myTotal)

const shoppingCart =[
    {
        itemName: "js course",
        price:599
    },
    {
        itemName: "java course",
        price:3500
    },
    {
        itemName: "full stack course",
        price:3599
    },
    {
        itemName: "DSA course",
        price:3599
    },
]
const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay)