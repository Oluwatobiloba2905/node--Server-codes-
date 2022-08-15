var http = require('http');

function userRequest(request, response) {
    console.log('this user made a request'+request.url);
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write('lawyer kunle');
    response.end();
}
http.createServer(userRequest).listen(8000);
console.log('server running');