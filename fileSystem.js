const file = require('fs');

file.readFile('text.txt','utf8',(error, result)=>{
    if(error)throw error;
    // console.log('file seen')
    console.log(result)

})

file.writeFile('http.js','const name = "fred"',(err)=>{
    if(err) throw err;
    console.log('file successfully changed')
})