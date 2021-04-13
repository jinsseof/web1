var f = function() {
    console.log(1+1);
    console.log(1+2);
}
// 아래 두가지 표현(배열, 객체) 모두 함수를 실행한다.

var a = [f];
a[0]();

var o = {
func:f
}
o.func();




var v1 = 'v1';
// 100000 code
var v2 = 'v2';


var o = {
    v1:'v1',
    v2:'v2',
    f1:function() {
        console.log(this.v1);
    },
    f2:function() {
        console.log(this..v2);
    }
}

o.f1();
o.f2();