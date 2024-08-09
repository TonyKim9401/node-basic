// HTML 페이지 서빙하기  (결과 비교 파일 : 04\results\server-4.js)

const http = require("http");

const server = http.createServer((req, res) => {
    const { url, method } = req;
    res.setHeader("Content-type", "text/plain");
    if (url === "/home" && method === "GET") {
        res.write("HOME");
        res.end();
    } else if (url === "/about" && method === "GET"){
        res.end("ABOUT");
    } else {
        res.end("NOT FOUND");
    }
});

server.listen(3000, () => {
    console.log("server is running");
});