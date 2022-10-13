// 콜백함수
// forEach의 신택스
forEach(callbackFn, thisArg)
// thisArg: Value to use as this when executing callbackFn.

let 인세규정 = {
    책: 10,
    영상콘텐츠: 50
}

function 인세계산함수(e){
    return e * (this.책 / 100)
}

[100, 200, 300].map(인세계산함수, 인세규정);
// 각 배열의 요소에 10분의 1 곱해 새로운 배열 반환
// (3) [10, 20, 30]

const person = {
    name: 'hojun',
    age: 25,
    a(){
        console.log(this);
        console.log(this.name);
        function b() {
            console.log(this);
            console.log(this.name);
            function c() {
                console.log(this);
                console.log(this.name);
            }
            c()
        }
        b()
    }
}
person.a()

//출력
{name: 'hojun', age: 25, a: ƒ}
hojun

Window {window: Window, self: Window, document: document, name: '', location: Location, …}
''

Window {window: Window, self: Window, document: document, name: '', location: Location, …}
''

// a에서 this = person
// b에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person
// c에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person
const person = {
    name: 'hojun',
    age: 25,
    a(){
        console.log(this);
        console.log(this.name);
        let b = () => {
            console.log(this);
            console.log(this.name);
            let c = () => {
                console.log(this);
                console.log(this.name);
            }
            c()
        }
        b()
    }
}
person.a()

//출력
{name: 'hojun', age: 25, a: ƒ} 
hojun

{name: 'hojun', age: 25, a: ƒ} 
hojun

{name: 'hojun', age: 25, a: ƒ}
hojun
// b()랑 c()가 화살표함수라서 a의 스코프를 따르게 되는것인가요? 네