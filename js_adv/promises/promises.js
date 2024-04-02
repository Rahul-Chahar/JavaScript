const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    // DB cal/workspaces/JavaScript/js_adv/domls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

//3rd
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


//4th
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Rahul",password:"123"})
        } else{
            reject('ERROR: Somthing went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"))


//5th
const promiseFive = new Promise(function(resolve,reject){
   setTimeout(function(){
    let error = false
    if(!error){
        resolve({username:"Javascript", password:"123"})
    } else{
        reject('ERROR: JS went wrong')
    }
   },1000) 
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()