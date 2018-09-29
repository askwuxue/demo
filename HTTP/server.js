const http = require('http');

const server = http.createServer((request, response) => {
    console.log('request: ' + request.url);

    response.writeHead(200, {
        // 利用jsonp 跨域， 返回JavaScript代码
        // 'Content-Type': 'application/javascript'
        'Access-Control-Allow-Origin': '*',
        
        // 设置预请求允许的头
        'Access-Control-Allow-Headers': 'X-Test-Cors',

        // 设置最大允许的预请求时间,注意有一个默认的请求
        'Access-Control-Allow-Max-Age': '10',

        // 设置允许的请求方法
        'Access-Control-Allow-Methods': 'PUT, Delete'
    })
    
    const json = JSON.stringify({"name": "wuxue"});

    response.end(`fn(${json})`);
})

server.listen(3000);