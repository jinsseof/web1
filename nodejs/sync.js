var fs = require('fs');

/*
// readFileSync(fileName, charset):mixed
// 동기 방식의 동작이므로 A, file내용, B 순서 출력
// 함수가 끝나면 file의 내용을 리턴
console.log('A');
var result = fs.readFileSync('./data/hahaha', 'utf8');
console.log(result);
console.log('B');
*/



// readFile(fileName, charset, callback)
// 동기 방식의 동작이므로 A, B, file내용 순서 출력
// return 대신 함수가 끝나면 callback을 실행하면서
// 첫번째 인자는 error, 두번째 인자는 file의 내용을 리턴
console.log('A');
fs.readFile('./data/hahaha', 'utf8', function(err, result){
    console.log(result);
});
console.log('B');