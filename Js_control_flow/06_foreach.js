const coding =["js","ruby","java","python","cpp"]

// coding.forEach(function(item){
//     console.log(item)
// } )

// Arrow function
// coding.forEach((num)=>{
//     console.log(num)
// })

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

const myCode = [
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "javascript",
        languageFileName: "javascript"
    },
    {
        languageName: "python",
        languageFileName: "python"
    },
    {
        languageName: "ruby",
        languageFileName: "ruby"
    },
    {
        languageName: "c",
        languageFileName: "c"
    }, 
]
myCode.forEach((item)=>{
    console.log(item.languageFileName)
})