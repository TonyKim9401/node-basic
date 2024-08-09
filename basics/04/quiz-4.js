// HTTP 서버를 만들고 8080 포트에서 실행시키세요.
// 서버에 접속하면 터미널에는 ‘8080 포트에서 서버 실행 중’,
// 웹 브라우저에는 ‘Hello, World!’를 출력하게 코드를 만들어보세요.

// '/home'으로 접속하면 'Welcome home'을 출력하고
// '/about'으로 접속하면 'About us'를 출력하는 코드를 추가해보세요.

const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/plain");

    const { url } = req;
    if (url === '/home') {
        res.end('Welcome home');
    } else if (url === '/about') {
        res.end('About us');
    } else {
        res.end('404 page not found');
    }
});

server.listen(8080, () => {
    console.log('server is running on 8080 port');
});