 let counter = 0;
 let sttp = 10;
 setTimeout(() => {
    for (let i = 0; i < sttp; i++) {
        counter++
    console.log(counter)
    }
    console.log(`stop`)
}, 5000);
console.log(set)

 let clearOutPut = setInterval(() => {
    counter++
   console.log(counter)
   if(counter  ===  sttp){
    clearInterval(clearOutPut)
    console.log(`interval successfully clear at: ${sttp}`)
   }
   
}, 3000);
