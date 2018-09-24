const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request come ', req.url);

    res.end('123');
})

server.listen(3000, function () {
    console.log('server is running.....');
});