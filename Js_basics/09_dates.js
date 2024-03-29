//Dates

let myDate = new Date()
//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toISOString());
//console.log(myDate.toJSON());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toTimeString());
//console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());
let createdDate = new Date("2023-01-14")
// console.log(createdDate.toLocaleString());


//-------------Time Stamps---------
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(createdDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))