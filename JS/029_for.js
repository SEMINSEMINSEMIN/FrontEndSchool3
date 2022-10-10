// airbnb는 for문을 쓰지말라고 함
// forin, forof 씀 거기서는
// 한국에서는 주의해야 할 사항임

for (let i = 0; i < 10; i++) {
    console.log(i);
}

i; // error, 블록레벨스코프
// for 안에 var 쓰면 밖에서도 뽑을 수 있음

// airbnb 컨벤션, IE 9 이하에서 사용 불가
for (const i in ['one', 'two']) {
    console.log(i);
}

// airbnb 컨벤션, IE 전부 사용 불가
for (const iterator of ['one', 'two', 'three']) {
    console.log(i);
}

/////

if (true) {
    var a = '1';
    let b = '2';
    const c = '3';
}

console.log(a); // 출력이 됨
console.log(b); // 출력이 안 됨
console.log(c); // 출력이 안 됨

for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i > 3) {
        break;
    }
}

let data1 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < data1.length; i++) {
    console.log(data[i]);
}

let data2 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < data2.length; i++) {
    console.log(data2[i+1] - data2[i]); //NaN
    // 마지막에 인덱스 값을 넘어섬
}

let data3 = [1, 3, 4, 8, 13, 17, 20];
for (let i = 1; i < data3.length; i++) {
    console.log(data2[i] - data2[i-1]);
}


// 무한 반복
for(let i = 0;;) {
    i++;
    console.log(i);
    if (i > 5) {
        break;
    }
}

for(let i = 0;;i++) {
    console.log(i);
    if (i > 5) {
        break;
    }
}

// 다음 수학 점수의 평균 구하기
// 내 풀이
let 수학점수 = [10, 99, 88, 85, 21, 35];
let sum = 0;
for (let i = 0;i <수학점수.length;i++){
    sum += 수학점수[i];
}
let average = sum / 수학점수.length;
console.log(average);

// 풀이
let s = 0;
console.log(수학점수.forEach((value => s += value)));
console.log(s / 수학점수.length);

console.log(수학점수.reduce((a, b) => a + b, 0) / 6);

let sum1 = 0;
for (let i = 0;i <수학점수.length;i++){
    sum1 += 수학점수[i];
}
let average1 = sum1 / 수학점수.length;
console.log(average1);

let user = [
    {
      "_id": "633e5b1711926cc42d1fbb4b",
      "index": 0,
      "guid": "e6ef4abc-a6fc-4ed5-a9b0-8060240c48ab",
      "age": 28,
      "name": "Mai Montoya",
      "gender": "female"
    },
    {
      "_id": "633e5b1718d6c001d2f771c7",
      "index": 1,
      "guid": "9b07b16c-7a4a-4152-83cf-fb64625f52fe",
      "age": 22,
      "name": "Shelley Potts",
      "gender": "female"
    },
    {
      "_id": "633e5b17fecc26a897aa2283",
      "index": 2,
      "guid": "cfb29cc6-8381-4695-8c2f-0c273a9d33c2",
      "age": 22,
      "name": "Hensley Flores",
      "gender": "male"
    },
    {
      "_id": "633e5b17267fe16c24f00591",
      "index": 3,
      "guid": "6e189d90-0981-4086-9ee2-12242fda76d1",
      "age": 20,
      "name": "Holmes Morrow",
      "gender": "male"
    },
    {
      "_id": "633e5b17b30766b9c38594f5",
      "index": 4,
      "guid": "f1505113-9383-4249-bbb3-0e5f8ea634b2",
      "age": 25,
      "name": "Elisa Miller",
      "gender": "female"
    }
  ]

  let 여성 = 0;
  let 남성 = 0;
  for (let i = 0; i < user.length; i++) {
    if (user[i]['gender'] === 'female'){
        여성 += 1;
    } else if (user[i]['gender'] === 'male'){
        남성 += 1;
    }
  }
  // 남성의 수를 구하겠다고 for문 한 번 더 쓰는건 효율적이지 않음

// 데이터에 undefined있는경우
// console.log(user.length - 여성);

user.filter(i => i['gender'] === 'female').length;

for (let 단 = 2; 단 < 10; 단++) {
    for (let 곱 = 1; 곱 < 10; 곱++) {
        console.log(`${단} X ${곱} = ${단 * 곱}`);
    }
}

// 암기를 부탁 (재귀로 구현하는건 for로 구현가능, for로 구현하는건 재귀로 구현 가능)
// 문자열 뒤집기
let txt= 'hello world';
let result = '';
for (let i = txt.length - 1; i >= 0; i--){
    result += txt[i];
}

result = '';
for (let i = 0; i < txt.length; i++){
    result = txt[i] + result;
}

// 시그마
s = 0;
for (let i = 0; i < 101; i++){
    s += i;
}

// 팩토리얼
let s2 = 1;
for (let i = 1; i < 6; i++){
    s2 *= i;
}

// 문제1 : 다음 입력된 숫자들의 합을 구하라
// input: "12345";
// result : 15;
let x = '12345';
let result10 = 0;
for (let i = 0;i < x.length; i++){
    result10 += parseInt(x[i]);
}
        // 스트링의 메서드
        // console.log(txt.length);

// 문제2 : 1부터 10,000까지 8이라는 숫자가 몇 번 나오는가?
let arr = Array(10000).fill(0).map((_, index)=>index).join('');
let result20 = 0;
for (let i = 0;i < arr.length; i++){
    if(x20[i] === '8'){
        result20 += 1;
    }
}