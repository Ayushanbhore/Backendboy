const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to Our Homepage')
    }
    if(req.url === '/about') {
        res.end('Here is our short story')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>Can't. Signed a nda</p>
        <a href = "/">backHome </a>`)
})

server.listen(8000)