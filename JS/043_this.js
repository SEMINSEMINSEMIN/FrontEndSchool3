// 엄격 모드
// 비엄격 모드
// 엄격 모드
// ES5에 새로운 기능이 추가되고 기존 기능 중 일부가 변경됨
// 기존 기능이 변경되었기 때문에 하위 호환성 문제가 생길 수 있음
// 그래서 변경사항 대부분은 ES5의 기본 모드에선 활성화되지 않도록 설계됨
// use strict라는 특별한 지시자를 이용해 엄격 모드를 활성화 햇을 때만 활성화되도록
// 함수별로도 use strict를 할 수 있긴 한데, 그렇게 하지마셈. 일관성에 안 맞음
// 스크립트 최상단에 오도록 
// use strict 취소할 방법이 없음

// 대부분의 경우 this의 값은 함수를 호출한 방법에 의해 결정됨
// 그런데 ES5는 함수를 어떻게 호출했는지 상관하지 않고 this 값 설정 가능

function a(){
    console.log(this);
}
a(); // Window를 가리키고 있음
// 함수를 호출해준 애가 this

function b(){
    console.log('hello world');
}

b();
// hello world
window.b();
// hello world


let test = {
    one: 1,
    two: 2,
    three: function(){
        console.log(this);
    }
}
// test를 호출한 애는 window
test.three();
// three를 호출한 애는 test

let test2 = test.three;
test2(); // window가 test2를 호출해줌
// this가 window가 돼버림

function sayName(){
    console.log(this.name);
}

var name = 'Hero'; // var로 선언시 변수가 window에 등록됨, let과 const는 아님, 근데 왜 let c = test.three; c();는 Window?

let peter = {
    name: 'Peter Parker',
    say: sayName
}

let bruce = {
    name: 'Bruce Wayne',
    say: sayName
}

sayName();
// 내 예상 답: Hero
// 답: Hero
peter.say();
// Peter Parker
bruce.say();
// Bruce Wayne

a.b.c.d.e.say(); // this가 e


function a(){};
a.name; // 'a'


function a(){
    console.log(this.name); 
    function b(){
        console.log(this.name);
    }
    b();
}
a();

function a(){
    console.log(this); 
    function b(){
        console.log(this);
    }
    b();
}
a();
// window
// window

// this 값을 사용자의 의도대로 조작하기
