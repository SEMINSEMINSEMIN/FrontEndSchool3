let value = [10, 1, 100, 200, 300, 10];

let value2 = {
    one:1,
    two:2,
    three:3,
    four:4,
}

Object.keys(value2);
// (4) ['one', 'two', 'three', 'four']
Object.keys(value);
// (6) ['0', '1', '2', '3', '4', '5']

//  반복가능한 객체 (Array, Map (en-US), Set, String, TypedArray, arguments 객체 등을 포함)에 대해서 반복
for (i in value2) { // for of로 순회를 돌 수 없다
    console.log(i);
}
/*
VM509:2 one
VM509:2 two
VM509:2 three
VM509:2 four
*/

Object.entries(value);

Object.entries(value2);

for (i of Object.entries(value2)) {
    console.log(i);
}
/*
(2) ['one', 1]
(2) ['two', 2]
(2) ['three', 3]
(2) ['four', 4]
*/

for ([i, j] of Object.entries(value2)) {
    console.log(`key is ${i} and value is ${j}`);
}
/*
key is one and value is 1
key is two and value is 2
key is three and value is 3
key is four and value is 4
*/

for ([i, j] of [[10, 20], [30, 40]]) {
    console.log(i, j);
}

for ([i, j] of [[10, 20, 30], [30, 40, 50]]) {
    console.log(i, j);
}
// 10 20
// 30 40

for ([i, j, ...k] of [[10, 20, 30, 1, 2], [30, 40, 50, 1]]) {
    // 몇 개 들어올지 모르는 경우
    console.log(i, j, k);
}
// 10 20 (3) [30, 1, 2]
// 30 40 (2) [50, 1]

for ([[i, j], k] of [[[10, 20], 30], [[30, 40], 50]]) {
    console.log(i, j, k);
}

for ([i, j] of [[[10, 20], 30], [[30, 40], 50]]) {
    console.log(i, j);
}

// 일반 변수 선언의 구조분해할당
let a, b, c;
[a, b] = [10, 20];
a;
// 10
b; // 20

let one, two, three;
[one, two, three] = '010-5044-2903'.split('-');
one;
// '010'
two;
// '5044'
three;
// '2903'

let one, two, three;
[one, two, three, ...four] = '010-5044-2903-01-02-03'.split('-');
four;
// (3) ['01', '02', '03']


let data = [10, 20, 30, 40, 50];
// 문제 1 (스프레드 정상 작동 x)
// a, b, c로 각각 분해
//a에는 10, b에는 20, 30, 40, c에는 50을 할당
let a, b, c;
[a, ...b, c] = [10, 20, 30, 40, 50];
[a, b, c] = [data[0], [data[1], data[2], data[3]], data[4]];
// 문제 2 (스프레드 정상 작동 x)
// a, b, c로 각각 분해
//a에는 10, 20, 30, b에는 40, c에는 50을 할당
let a, b, c;
[...a, b, c] = [10, 20, 30, 40, 50];
[a, b, c] = [[data[0], data[1], data[2]], data[3], data[4]];
// 문제 3 (스프레드 정상 작동 o)
// a, b, c로 각각 분해
//a에는 10, b에는 20, c에는 30, 40, 50을 할당
let a, b, c;
[a, b, ...c] = [10, 20, 30, 40, 50];


// 같은 키가 있을 때 키에 해당하는 벨류 할당
let data = {
    name : '호준',
    age: 10,
    money: 100
};

let {name, age} = data;

let data = {
    name: 'hojun',
    age: 10,
    money: 100,
    company: 'weniv'
};

let {name, age, ...rest} = data;

// 순서 믹싱
let data = {
    name: 'hojun',
    money: 100,
    company: 'weniv',
    age: 10,
};

let {name, age, ...rest} = data;
rest; // {money: 100, company: 'weniv'}

let a = [10, 20, 30];
a.push(100);
a.unshift(1000);

let a = [10, 20, 30];
a = [1000, ...a, 100];

let a = [1, 2, 3];
let b = [10, 20, 30];
let c = [...a, ...b]; // 이렇게 합쳐진 값을 다시 구조분해할당

let str = 'hello world';
console.log([str]);

let str = 'hello world';
console.log([...str]);

'!'.repeat(10);
[...'!'.repeat(10)];