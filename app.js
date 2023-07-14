const http = require('http');
const { url } = require('inspector');

const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.write('welcome')
    }else{
        res.write('no page found')
    }
    res.end()
})
const port = 3000
 server.listen(port)
 console.log(`server running on port ${port}`)