const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    console.log('request: ' + request.url);
    const html = fs.readFileSync('test.html', 'utf8');
    const js = fs.readFileSync('load.js', 'utf8');

    // 对请求的页面中的脚本进行限制,只有是通过http或者http加载的才允许
    if (request.url === '/') {
        response.writeHead(200, {
            'Content-Type': 'text/html ',
            'Content-Security-Policy': 'default-src http: https:'
        })
        response.end(html);
        // 只有对于服务端返回的不会进行限制
    } else {
        response.writeHead(200, {
            'Content-Type': 'application/javascrip',
        })
        response.end(js);
    }
})

server.listen(8888);