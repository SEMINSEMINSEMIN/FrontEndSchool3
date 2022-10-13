// 집합, 합집합, 교집합, 차집합
// 중복을 허락하지 않는다
let s = new Set('abcdeeeeeeee');

console.log(s);
console.log(s.size);

// 문제
let 회사게시판 = ['이호준', '이호준', '이호준', '김은하', '김은하', '이준근'];

// 문제1: 몇 명이 게시판에 게시물을 썼을까요?
let s1 = new Set(회사게시판);
console.log(s1.size); // 3

// 문제2: 각각 몇 개의 게시물을 작성하였나요?

for (const i of s1){
    console.log(i, 회사게시판.filter(x => x === i).length);
}

// 서현주님 코드(키의 업데이트 활용)
let map = new Map();
for (const i of 회사게시판) {
    map.set(i, (map.get(i) || 0) + 1); // 순회 돌면서 해당 key 값을 업데이트 해주는 식으로
}
map.set('이호준', (map.get('이호준') || 0) + 1)
// => map.set('이호준', 1)
map.set('이호준', (map.get('이호준') || 0) + 1)
// => map.set('이호준', 2)
map.set('이호준', (map.get('이호준') || 0) + 1)
// => map.set('이호준', 3)
map.set('김은하', (map.get('김은하') || 0) + 1)
// => map.set('김은하', 1)


// set에 값을 추가
let s = new Set('abcdeeeeeeee');
s.add('f');

// set 순환
for (let variable of s) {
    console.log(variable);
}

// 값이 배열인 경우
let ss = new Set('abcdeeeee'.split(''));
console.log(ss);

let a = new Set('abc');
let b = new Set('cde');
// 교집합
let cro = [...a].filter(value => b.has(value))
// 합집합
let union = new Set([...a].concat(...b))
// cf
let a = [1, 2, 3];
let b = [4, 5, 6];
a.push(b); 
a; // [1, 2, 3, [4, 5, 6]]

let a = [1, 2, 3];
let b = [4, 5, 6];
a.push(...b); 
a; // [1, 2, 3, 4, 5, 6]
// 차집합
let dif = new Set([...a].filter(x => !b.has(x)));