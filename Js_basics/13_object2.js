//Singletion object
// const tinderUser = new Object()
// console.log(tinderUser)

//Non Singletion object
// const tinderUser = {}
// console.log(tinderUser)

const tinderUser ={}
tinderUser.id ="123abc"
tinderUser.name ="Rahul"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email: "some@gmail.com",
    fullname: {
        userFullname:{
            firstName: "rahul",
            lastname: "chahar"
        }
    }
}
// console.log(regularUser)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userFullname);
// console.log(regularUser.fullname.userFullname.firstName)

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2)  ({} ye optional hai isme but ise use karna thik houta hai ek surety hou jaati hai ki han saare sources(obj1,obj2,..)) ye sab {} iske ander hi jaayegye

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

//jab database se value aayegi
const user =[
    {
        id:1,
        email:"r@gmail.com"
    },
    {
        id:2,
        email:"a@gmail.com"
    },
    {
        id:3,
        email:"h@gmail.com"
    },
]
// user[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course= {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Rahul"
}

// course.courseInstructor

// const {courseInstructor} = course

// console.log(courseInstructor);

// more modified  (destructuring)
const {courseInstructor: instructor} =course
console.log(instructor)

