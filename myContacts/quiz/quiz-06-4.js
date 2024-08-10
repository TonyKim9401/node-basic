// 사용하여 사용자가 입력한 숫자를 받아 해당 숫자의 제곱을 반환하는 API를 작성하세요.
// (예) "/square/5" 경로로 접속하면 25를 반환합니다.

const express = require("express");
const app = express();

app.get("/square/:num", (req, res) => {
    let num = Number(req.params.num);
    res.send(`The given number ${num}'s square value is ${num * num}`);
})


app.listen(3000, () => {
    console.log('The server is running');
})