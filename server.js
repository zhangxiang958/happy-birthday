const http = require('http');
const fs = require('fs');


http.createServer(function (req, res){
    console.log(req.url);
    if (req.url === '/') {
        let index = fs.createReadStream(`./index.html`);
        index.pipe(res);
    } else {
        let file = fs.createReadStream(`.${req.url}`);
        file.pipe(res);
    }
}).listen(3003, function (){
    console.log('server listen on 3003');
});