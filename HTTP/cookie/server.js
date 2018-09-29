const http = require('http');
const fs = require('fs');
// 第三包zlib，对=传输数据进行压缩
const zlib = require('zlib');

const server = http.createServer((request, response) => {
    // console.log('request: ' + request.url);
    const html =fs.readFileSync('test.html', 'utf8');
    const img = fs.readFileSync('test.jpg');
    if (request.url === '/') {
        response.writeHead(200, {
            'Content-Type': 'text/html ',
            'set-cookie': ['name=wuxue;','pass=1314; max-age=20; httpOnly'],
            'Connection': 'close'
        })
        response.end(html);
    } else {
        response.writeHead(200, {
            'Content-Type': 'image/jpg'
            // 'Connection': 'close'
        })
        response.end(img);
        // response.end(zlib.gzipSync(img));
    }
})

server.listen(8888);