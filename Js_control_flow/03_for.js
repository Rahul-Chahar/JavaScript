// for

for(let i=0; i<=10; i++){
    const element =i;
    console.log(element);
}

// table print
for(let i=1; i<=20; i++){
    for(let j=1; j<=10; j++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
}

let myArray = ["flash","batman","superman"]
for(let index =0; index<myArray.length; index++){
    // const element = myArray[index];
    console.log(myArray[index]);
}


// break and continue

for(let index = 1; index <= 20; index++){
    if(index == 5){
        console.log(`Detected 5`);
        break
    }
    console.log(index)
}

for (let index = 0; index <=10; index++) {
    if(index ==5){
        console.log(`Detected 5`);
        continue
    }
    console.log(index)
    
}