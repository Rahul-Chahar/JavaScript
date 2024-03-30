// for of

const arr=[1,2,4,5,6,7]
for(const num of arr){
    console.log(num);
}

const greetings = "Hello World!"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}


// Maps

const map = new Map()
map.set('In', "India")
map.set('USA', "United States of American")
map.set('Fr', "Franc")
console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value)
}
// object is not iterable by forof
const myObject ={
    'game1': 'NFS',
    'game2': 'Spiderman'
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }




//  for in 

const myObject1 ={
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for(const key in myObject1){
    console.log(`${key} shortcut is for ${myObject1[key]}`)
}



const programming =["js","rb","py","java","cpp"]
for(const key in programming){
    console.log(programming[key]);
}