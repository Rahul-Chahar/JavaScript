

if(true){
    let a = 10
    const b = 20
    var c = 30
}
//console.log(a) showing error  
//console.log(b) showing error
console.log(c) //-> 30 (that's why we not use var )

// Nested scope
function one(){
    const username1 = "rahul"
    
    function two(){
        const website ="youtube"
        console.log(username1)
    }
   // console.log(website); showing error because of scopes we access outer the scope

    two()
}
one()



// ++++++++++++ interesting +++++++

function addone(num){
    return num+1
}
addone(5)

const addTwo = function(num){
    return num+2
}
addTwo(5)
