const http = require('http'); 

const port = process.env.PORT || 8080

const server = http.createServer((req, res) => { 
    if (req.method == 'GET') { 
        if (req.url === '/') { 
            res.end(`<h1>Hello World!</h1>`) 
        } 
        if (req.url === '/hello') { 
            res.end(`<h1>Chanda's first repo on GitHub!</h1>`) 
        } 
    } 
}) 

server.listen(port, () => { 
    console.log(`Server listening on port ${port}`); 
})