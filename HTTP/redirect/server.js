const http = require('http');
const fs = require('fs');
// 第三包zlib，对=传输数据进行压缩
const zlib = require('zlib');

const server = http.createServer((request, response) => {
    // console.log('request: ' + request.url);
    const html =fs.readFileSync('test.html', 'utf8');
    // const img = fs.readFileSync('test.jpg');
    if (request.url === '/') {
        response.writeHead(302, {
            'Location': '/new',
            'Content-Type': 'text/html ',
        })
        response.end('');
    } else if (request.url === '/new') {
        response.writeHead(200, {
            'Content-Type': 'text/html',
        })
        response.end(html);
    }
})

server.listen(8888);