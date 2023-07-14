const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('welcom to my home page')
    }
    else if(req.url === '/about'){
        res.write('welcome to about page')
    }else{
        res.write('Sorry no such page found')
    }
    res.end()
})
const port = 3000;
server.listen(port)
console.log(`server running on port ${port}`)