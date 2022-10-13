/////////////함수의 구조/////////////
function 안녕(파라미터) {
    console.log(파라미터);
    console.log('hello world');
    return 100;
}

let 아규먼트 = 1000;
안녕(아규먼트);
console.log(안녕(아규먼트) + 안녕(아규먼트)); // 200

// 파선아실: 파라미터는 선언될 때 아규먼트는 실행될 때
// 함수 내부에서 선언된 변수가 파라미터

// console.log의 리턴 값은 undefined

function 안녕() {
    console.log('hello');
} // 리턴 값 생략

안녕(); // undefined
console.log(안녕() + 안녕()); // NaN
console.log(String(안녕())+ String(안녕()));

function 안녕() {
    console.log('hello');
    return 10;
} 

console.log(String(안녕())+ String(안녕())); // 1010

function 안녕() {
    console.log('hello');
    return; // 리턴 값 생략과 마찬가지
} 

console.log(String(안녕())+ String(안녕())); 


function 안녕() {
    console.log('hello');
    console.log('hello');
    console.log('hello');
    return;
    console.log('hello');
    console.log('hello');
    console.log('hello');
}
안녕(); // 반환 값은 undefined, return은 데이터를 반환하고 함수 종료

// 특정조건 만족시 함수 종료
function 안녕() {
    console.log('hello');
    console.log('hello');
    console.log('hello');
    if (특정조건) {
        return 100;
    }
    else {
        console.log('hello');
        console.log('hello');
        console.log('hello');
    }
    console.log('hello');
    return console.log('안녕') // undefined
}

/////////////////////////////////////////////
// 함수를 사용하는 이유: 재사용성 / 유지보수 / 코드의 간결성

// 1. 재사용성 -> 재사용하지 않는 코드는 함수로 정의하나요? -> 가능하면 함수로 만드는것을 권장함
// 2. 유지보수 -> 3번 사항 + 변수의 스코프
// 3. 구조 파악 용이
// 아래는 참고만
// 4. 추상화로 개발하는 것이 객체지향 프로그래밍 언어의 언어 철학, 기능을 몰라도 사용(자동차 브레이크 페달의 원리를 몰라도 걍 밟으면 브레이크 가능)

////////함수의 다양한 형태/////////
function 함수1(a, b, c){
    return a + b + c;
}
함수1(10, 20, 30) // 60, 콘솔창의 기능(마지막 라인에 한하여 콘솔 로그를 찍지 않아도 return 값을 콘솔창에 출력해준다

console.log(함수1(10, 20, 30));
console.log(함수1(10, 20, 30));
// 60 80 undefined

// 필요 이상의 아규먼트를 넣었을 때
함수1(10, 20, 30, 40); // 60, 에러가 나지 않음

// 필요 이하의 아규먼트를 넣었을 때
함수1(10, 20); // '30undefined'

// 구조분해할당을 이용한 아규먼트 처리
function 함수2(a, b, ...c){
    console.log(c);
    return Math.max(...c);
}

함수2('hello', 'world', 10, 20, 30, 40);
// (4) [10, 20, 30, 40]
// 40

function 함수2([a, b], ...c){
    console.log(a);
    console.log(b);
    console.log(c);
}

함수2([1, 2], 10, 20, 30, 40);
// 1
// 2
// (4) [10, 20, 30, 40]
// undefined

// 기본값 할당
function 함수3(a = 10, b = 20, c = 30){
    return a + b + c;
}

console.log(함수3());
console.log(함수3(100));
console.log(함수3(100, 200));
console.log(함수3(100, 200, 300));

// 값이 '순서대로' 들어가버림
함수3(c=1000); // 1050
함수3(c=1000, a=2000); // 3030

// 4. 함수에서 객체를 아규먼트로
// 개선할 여지가 있는 예제
function 함수4(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부){
    console.log('함수기능');
    return;
}
함수4('Gold', true, true, true, '대화방 전체 백업 가능', true); // 가독성이 떨어진다

function 함수4({
    회원등급, 
    글쓰기, 
    글읽기, 
    채널관리, 
    백업, 
    소셜로그인여부
}){
    console.log('함수기능');
    console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
    return;
}

function 함수4({
    회원등급 = 'Gold', 
    글쓰기 = true, 
    글읽기 = true, 
    채널관리 = true, 
    백업 = '부분가능', 
    소셜로그인여부 = true
}){
    console.log('함수기능');
    console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
    return;
}

함수4({
    회원등급: 'Gold', 
    글쓰기: true, 
    글읽기: true, 
    채널관리: false, 
    백업: '부분가능', 
    소셜로그인여부: true
})

함수4({
    회원등급: 'Gold', 
    채널관리: false, 
    백업: '부분가능', 
    소셜로그인여부: true
}) // 입력하지 않은 거에 대해서는 undefined

function 함수4({
    회원등급 = 'Gold', 
    글쓰기, 
    글읽기, 
    채널관리, 
    백업 , 
    소셜로그인여부
}){
    console.log('함수기능');
    console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
    return;
}

let {one= 1, two= 2} = {};

function 함수({a = 2, b = 1,c = 3}){
    return a + b + c;
}
함수(); // 실행 x

//아규먼트 없이 실행될 수 있게, 노트 필기, 객체의 구조 분해 할당
fucntion 함수({a = 2, b = 1,c = 3} = {}){
    return a + b + c;
}
함수(); // 실행 o


fucntion 함수({a = 2, b = 1,c = 3}){
    return a + b + c;
}
함수({}); // 이 코드를 축약한게 위 코드

/////////재귀함수: 내가 나를 호출하는거!//////////
// 재귀함수(top-down: 위에서 아래로, 분할 정복)와 반복문(Bottom-up: 아래에서 위로)의 차이
// 반복문보다 재귀함수가 성능이 거의 떨어지긴 함
// 알고리즘에서 잘 사용할 수 있어야 함
function factorial(n){
    if (n <= 1){ // 종료 조건
        return 1;
    }
    return n * factorial(n - 1); // 내가 나를 호출하고 있음, 종료 조건이 없으면 무한반복
}
//                 n n <= 1 return
// factorial(5)    5 false  5*factorial(4) = 120
// factorial(4)    4 false  4*factorial(3) = 24
// factorial(3)    3 false  3*factorial(2) = 6
// factorial(2)    2 false  2*factorial(1) = 2
// factorial(1)    1 true   1
// 한 번 밑으로 쭉 내려갔다가 다시 위로 올라감

let result = 1;
for (let i  = 2; i < 6; i++){
    result *= i;
}
console.log(result);

//시그마
// 누적합은 아래 코드들이 좋은 코드가 아님
function 누적합(n){
    if (n<=1){
        return 1;
    }
    return n + 누적합(n-1);
}
누적합(5); // 5번을 순회를 다 돈다

let result = 0;
for (let i = 1; i < 101; i++){
    result += i;
}
console.log(result);

// 수학공식 이용하는게 더 효율적!
// 순회를 돌지 않고 해결할 수 있으면 돌지 않고 해결해야 함
let n = 100;
console.log(n * (n + 1) / 2);

// hint: 재귀함수로 문자열을 뒤집는 코드를 작성하세요
function reverse(txt){
    if (txt.length <= 1){
        return txt;
    }
    return reverse(txt.slice(1)) + txt[0];
}
reverse('hello world');

/*
참고사항
'hello'.slice(1)
'ello'

n                   txt.length <= 1         return
reverse('hello')    false                   reverse(txt.slice(1)) + 'h' = 'olleh'
reverse('ello')     false                   reverse(txt.slice(1)) + 'e' = 'olle'               
reverse('llo')      false                   reverse(txt.slice(1)) + 'l' = 'oll'            
reverse('lo')       false                   reverse(txt.slice(1)) + 'l' = 'ol'                      
reverse('o')        true                    'o'                      
*/

txt = 'hello world';
result = '';
for (const i of txt) {
    result = i + result;
}
console.log(result);

// 지역 변수와 전역 변수
// 블록 레벨 스코프
if(true){ // for문이어도 마찬가지임
    let x = 10;
    const y = 10;
}
console.log(x, y); // ReferenceError

// 함수레벨 스코프
// 밖에 선언된 x는 함수 내부에서도 접근이 가능함
let x = 100;

function xplus() {
    x = x + 10;
}

xplus(); // 110 (밖에 있는 변수가 함수로 들어옴)

// 함수가 종료된 다음에는 선언된 변수는 휘발됨
function xplus(){
    let x = 100;
    x = x + 10;
}

xplus(); // undefined
console.log(x); // ReferenceError

// 함수 안에 함수
function a(){
    console.log('a 실행');
    function b(){
        console.log('b 실행');
    }
}

a(); 
// a 실행
// undefined

function a(){
    console.log('a 실행');
    function b(){
        console.log('b 실행');
    }
    b();
}

a();
// a 실행
// b 실행
// undefined
b(); // Error, 함수 내의 함수가 나중에 휘발됨

// 스코프에 관한 글: https://velog.io/@bico/JavaScript-%EB%A0%89%EC%8B%9C%EC%BB%AC-%EC%8A%A4%EC%BD%94%ED%94%84lexical-scope

// 화살표 함수
function 함수1(x, y){
    return x + y;
}

let 함수2 = (x, y) => x + y;

함수1.name; // 함수1
함수2.name; // 함수2

function 함수1(x, y){
    let z = x + y;
    return z;
}

let 함수2 = (x, y) => {
    let z = x + y
    return z;
};

// 호이스팅이 다름
