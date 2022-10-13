// 즉시 실행함수: 메모리 효율, 일회용 함수
// 익명 즉시 실행함수
(function(){
    let a = 1;
    let b = 2;
    return a + b;
}());

// 가명 즉시 실행 함수
(function foo(){
    let a = 1;
    let b = 2;
    return a* b;
}());

foo; // ReferenceError


// 문제
let data = [{
    반 : 1, 
    번 : 1, 
    이름 : "호준", 
    중간고사점수 : 55
}, {
    반 : 1, 
    번 : 2, 
    이름 : "길동", 
    중간고사점수 : 60
}, {
    반 : 1, 
    번 : 3, 
    이름 : "영희", 
    중간고사점수 : 30
}, {
    반 : 1, 
    번 : 4, 
    이름 : "철수", 
    중간고사점수 : 20
}, {
    반 : 1, 
    번 : 5, 
    이름 : "규리", 
    중간고사점수 : 100
}]

// function average(arr){
//     let scoreSum = arr.map(i => i.중간고사점수).reduce((누적값, 현재값) => 누적값 + 현재값);
//     return scoreSum / arr.length;
// }

// 동현, 준근님 코드
function 평균값구하기(data){
    let sum = 0;
    for(student of data){
        sum += student["중간고사점수"]
    }
    return sum / data.length
}

function 평균값구하기(data) {
    let 중간고사점수 = data.map((x) => x.중간고사점수)
    let 중간고사점수합 = 중간고사점수.reduce((a, b) => a + b)
    return 중간고사점수합 / data.length
}

function 평균값구하기(data) {
    return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
}

console.log(function () {
    return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
}());

let a = (data) => data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
console.log(a(data));

let b = (data) => { return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length }
console.log(b(data));

// call by value, reference, sharing
// 자바스크립트는 call by value만 존재한다(?)
// array와 같은 convension 자료형(여러 가지 데이터들이 종합적으로 있는거)을 넘길 때에는 함수 안에서 값의 수정이 된다
// call by reference
let test = [10, 20, 30];

function(a){
    a[0] = 1000;
}

함수(test); 

test; // (3) [1000, 20, 30], test가 변경됨

// call by value
let test = 100;

function(a){
    a[0] = 1000;
}

함수(test);

test; // 100, test가 변경되지 않음
// call by value: 값의 전달
// call by reference: 참조의 전달
// 자바스크립트는 call by value만 존재한다: 참조타입을 넘기면 주소가 넘어가는 것이 아니라 '주소값'을 복사한 복사본이 넘어간다(Object, array, function)

// call by value: 값의 전달
// call by reference: 참조의 전달
// 면접 질문에서는 안 나오는 경우가 많음
// 자바스크립트에는 call by value만 존재한다. 그 개념이 독특하기 때문에 call by sharing이라고도 부릅니다.


// 클로저: 변수 은닉, 메모리 효율(변수가 은닉됨으로써 생기는 메모리 효율), 코드 효율
// 면접에 자주 나올 수 있음!
function 제곱(x){
    function 승수(y){
        return y ** x; // 제곱(x)의 x를 참고하고 있음, 밖의 x를 참고할 수 있다는게 핵심
    }
    return 승수
}

let 제곱2 = 제곱(2); // y의 2승 값
제곱2(3); // 3의 2승, 9
제곱2(10); // 10의 2승, 100

console.log(제곱(2)(3)); // 3의 2승, 9, 승수(3)


function makeAdder(x) {
    var y = 1;
    return function(z) {
        y = 100;
        return x + y + z;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
//클로저에 x와 y의 환경이 저장됨

console.log(add5(2));  // 107 (x:5 + y:100 + z:2), y의 값을 알 수가 없음, x의 값도 알 수 없음, z의 값도 알 수 없음
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
//함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산
//지역스코프에서 값을 찾고, 없으면 그 밖에 있는 스코프에서 찾고, 계속해서 찾아 올라가 전역 스코프까지 찾아보는 것을 스코프체이닝
//어려운 얘기로는 내부 렉시컬 환경에서 찾고 없으면 전역 렉시컬 환경에서 찾는다 얘기함.
//함수가 수행된 이후에도 상위함수의 렉시컬 환경에 접근 가능

// 왜 은닉을 하냐?
// 다른 코드들이 이 코드를 만드는 거 자체를 불가능하게 한다
// 왜 불가능하게 해야하냐?
// 절대 변경되면 안 된다, 주식 차트
/*
console.dir(add5);
VM1268:1 
ƒ anonymous(z)
arguments
: 
null
caller
: 
null
length
: 
1
name
: 
""
prototype
: 
{constructor: ƒ}
[[FunctionLocation]]
: 
VM1177:3
[[Prototype]]
: 
ƒ ()
[[Scopes]]
: 
Scopes[2]
*/
