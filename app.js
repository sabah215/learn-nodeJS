const http = require('http');

const server = http.createServer((req, res) => {
       if(req.url ==='/'){
              res.end('<h1>Welcome to our homepage</h1>');
       }
       
      if(req.url === '/about'){
              res.end('Here is our short history');
      }

       res.end(`
       <h1>OOps</h1>
       <p>Page not fount</p>
       <a href="/">Back home</a>
       `) ;

     
     
});

server.listen(5000);