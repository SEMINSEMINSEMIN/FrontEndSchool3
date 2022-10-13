// callback function
// 나중에 부르는 함수
function sum(x, y, 콜백함수){
    콜백함수(x + y);
    return x + y;
}

sum(10, 20, console.log);
// 30 (콘솔)
// 30 (리턴)

function documentWrite(s){
    document.write('콜백함수', s);
}
sum(10, 20, documentWrite);

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map

function 제곱(x){
    return x ** 2;
}
let arr = [10, 20, 30, 40, 50];
arr.map(제곱); // 이름만 아규먼트로
arr.map(x => x ** 2);

// forEach
// 노드에서의 forEach는 IE에서 작동하지 않음
// 새로운 배열을 만들지 않고 순회만 하는 함수임
function 두배(x){
    console.log(x ** 2);
}
let arr = [10, 20, 30, 40, 50];;
arr.forEach(두배);


// 문제: 화살표 함수를 이용해 아래 map과 동일한 기능을 하는 forEach문 완성
let arr = [10, 20, 30, 40, 50];
arr.map(x => x ** 2);

let result = [];
arr.forEach(x => {
    result.push(x ** 2);
})
console.log(result);