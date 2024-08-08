// 순서대로 실행하기  (결과 비교: 02\results\sync.js)

function A() {
    console.log('A');
}

function B(callback) {
    setTimeout(() => {
        console.log('B');
        callback();
    }, 2000);
}

function C() {
    console.log('C');
}

A();

// C() becomes a callback function
B(C);