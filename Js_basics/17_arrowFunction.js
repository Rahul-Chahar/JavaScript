const user ={
    username:"Rahul",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);
    }
}
user.welcomeMessage() // Rahul, welcome to website
user.username ="Chahar"
user.welcomeMessage() // Chahar, welcome to webiste

// const chai =function(){
//     let username ='Rahul'
//     console.log(this.username)
// }
// chai()

const chai = () => {
    let username = 'Rahul'
    console.log(this.username)
}
chai()