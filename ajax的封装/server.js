const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain", "Access-Control-Allow-Origin":"*"});
    // let body = url.parse(req.url, true);
    // let parse = querystring.parse(req.url)
    // console.log(body.query);
    // res.end(JSON.stringify(body.query));
    let str = '';
    req.on('data', function (data) {
        str += data;
    });
    req.on('end', function () {
        const post_body = querystring.parse(str);
        res.end(JSON.stringify(post_body));
        console.log(post_body);
    });
   
})
server.listen(3000);