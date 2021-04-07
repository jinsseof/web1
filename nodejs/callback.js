// function a() {
//     console.log('A');
// }

var a = function () {
    console.log('B');
}


// 인자로 받은 함수를 실행하는 slowfunc()
// 파라미터로 변수를 넘기듯이 함수를 넘길 수 있음
function slowfunc(callback) {
    callback();
}

slowfunc(a);