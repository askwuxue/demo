const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    console.log('request: ' + request.url);
    if (request.url === '/') {
        const html =fs.readFileSync('test.html', 'utf8');
        response.writeHead(200, {
            'Content-Type': 'text/html '
        })
        response.end(html);
    } else if (request.url === '/script.js') {
        // console.log(request.headers);

        // 获得请求头中的资源判断
        const ifNoneMatch = request.headers['if-none-match'];

        if (ifNoneMatch == '995') {
            response.writeHead(304, {
                'Content-Type': 'application/javascript',
                // 设置缓存时间，如果想要设置比较久的缓存的时间，处理当服务器资源变化后
                // 如何更新新的缓存？ 根据哈希更新URL，重新请求。
                'Cache-Control': 'max-age = 2000, no-store',
    
                // 设置资源验证的
                'Last-Modified': '1314',
                'Etag': '995'
            })
            // 缓存之后，如果资源没有改变，返回的数据不会更新，依旧使用缓存的数据
            response.end('console.log("s.")'); 
        } else {
            response.writeHead(200, {
                'Content-Type': 'application/javascript',
                // 设置缓存时间，如果想要设置比较久的缓存的时间，处理当服务器资源变化后
                // 如何更新新的缓存？ 根据哈希更新URL，重新请求。
                'Cache-Control': 'max-age = 2000, no-cache',
    
                // 设置资源验证的
                'Last-Modified': '1314',
                'Etag': '995'
            })
            response.end('console.log("script change.....")'); 
        }

        
    }
})

server.listen(8888);