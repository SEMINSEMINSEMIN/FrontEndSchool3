// 키 순회-forin
let data = {
    'one':'하나',
    'two':'둘',
    'three':'셋',
    'four':'넷',
}

for (const i in data) {
    console.log(i);
    console.log(data[i]);
}

for (const i in data) {
    console.log(i);
    console.log(data.i); // error
}

let s = 0;
for (const i of '12345') {
    s+= parseInt(i);
}

let data2 = [10, 20, 30, 40];
// 딥다이브 참고
// let data2 = {
//     0:10,
//     1:20,
//     2:30,
//     3:40
// }

for (const i in data2){
    console.log(i);
}

for (const i of data2){
    console.log(i);
}

for (const i in 'hello world'){
    console.log(i);
}

for (const i of 'hello world'){
    console.log(i);
}

/// 질의응답
for

//for of는 IE에서 사용이 불가합니다.