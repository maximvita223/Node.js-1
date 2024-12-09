const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Запрос получен");
    
    if (req.url === "/") {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        counter++;
        res.end(`<a href="/about">about</a> 
            счетчик просмотров = ${counter.toString()}`
        );

    }else if (req.url === "/about") {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });
        counter++;
        res.end(`<a href="/">Главная страница</a> 
            счетчик просмотров = ${counter.toString()}`
            
        );
        }    
        else {
            res.writeHead(404, {
                'Content-Type': 'text/html; charset=utf-8'
            });
            res.end('<h1>404</h1>');
            }
        
   
});
let counter = 0;
const port= 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`)
});