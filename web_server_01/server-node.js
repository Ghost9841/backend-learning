const http = require('http')
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req,res) =>{
    if (req.url === '/'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end("Hello World")
    }
    else if (req.url === '/world'){
        res.statusCode = 200
        res.setHeader('Content-Type','text/plain')
        res.end("Why you searching for world? You got me. Your Whole World is me :wink:")
    }
    else{
        res.statusCode = 404
        res.setHeader("Content-Type",('text/plain'))
        res.end("404 : The world you are looking for not found ")
    }
})
server.listen (port,hostname,() => {
    console.log(`Server is listening at http://${hostname}:${port}`)
})
