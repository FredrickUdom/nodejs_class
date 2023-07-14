const readFiles = require('fs');
  readFiles.writeFile('./modules/filecontent/test.txt', 'hey you','utf8', (err)=>{
    if(err)
       throw err
    
    console.log("result")
})
// console.log(file)