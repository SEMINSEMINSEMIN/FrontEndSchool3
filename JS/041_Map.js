// Map 권장
// 오브젝트의 단점을 해결하기 위해 map이 나옴
// 키-값 쌍을 가지는 객체 자료형의 한 종류
let m = new Map();
let test = [1, 2];
m // 메서드 체이닝
    .set('하나', 1)
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)
    .set(true, '트루')
    .set([1, 2], '리얼리?') // 배열을 키로 하는게 가능함, 근데 호출이 제대로 안 됨
    .set(test, '리얼리?') // 배열을 키로 하면서 동시에 호출도 제대로 됨!

console.log(m);

console.log(m.get('하나'));
// 1
console.log(m.get(true)); // object에서 불가능
// 트루

console.log(m.get([1, 2])); // undefined
[1, 2] === [1, 2]; // false
[1, 2] == [1, 2]; // false
let x = [1, 2];
let y = [1, 2];
x === y; // false
x == y; // false
// 각 객체가 다른 주소값을 가진다

// 메모리 주소가 같은 곳을 바라보고 있으니까
console.log(m.get(test));

// Map에 해당 key가 있는지 확인하기
m.has('하나'); // true
m.has('열'); // false

// Map에 값을 제거하기
m.delete('하나');
m.has('하나'); // false

// 크기 구하기
m.size; // 6
// 참고: 오브젝트는 length가 없음
let data = {'one': 1, 'two': 2};
console.dir(data);

// 처음부터 map을 만드는게 좋음
// 객체를 map으로
let data = new Map({'one': 1, 'two': 2}); // 불가능
// map is iterable
let data = new Map([['one', 1], ['two', 2]]); // 가능
let data = new Map(Object.entries({'one': 1, 'two': 2})); // 가능
let data = new Map('hello world'); // 불가능
let data = new Map([10, 20, 30, 40]); // 불가능

// 직접 순회가 가능한 Map
// 오브젝트는 순회 불가능
let data = {'one': 1, 'two': 2};
for (const iterator of {'one': 1, 'two': 2}){
    console.log(i);
}
// 이렇게 해야 순회 가능
for (const iterator of Object.entries(data)){
    console.log(i);
}
// Map의 경우
let m = new Map();
m
    .set('하나', 1)
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)

for (const i of m){
    console.log(i);
}

// 구조분해할당
for (const [i, j] of m){
    console.log(i);
}

for (const [i, j] of m){
    console.log(i, j);
}

// 형변환
let 맵 = new Map(Object.entries({'one': 1, 'two': 2}));

let 오브젝트 = Object.fromEntries(맵);

// 장점
// https://shanepark.tistory.com/m/220
// Key로 여러가지 Type을 사용할 수 있다
// Map의 크기를 훨씬 빠르고 쉽게 측정할 수 있다
// 성능이 좋다: entry들의 잦은 추가와 제거에 최적화 되어 있음
// 직접 iteration
// key에 순서가 있다
// key overriding이 없음

// 폴리필
// 바벨: 트랜스파일러, 모던 자바스크립트 ㅗ드를 구 표준을 준수하는 코드로 바꿔줌

