// while(조건문) {
//  실행문;
// }

let i = 2;
let j = 1;
while (i < 10){
    while (j < 10){
        console.log(`${i} X ${j} = ${i * j}`);
        j++;
    }
    i++;
}

let i = 2;
let j = 1;
while (i < 10){
    while (j < 10){
        console.log(`${i} X ${j} = ${i * j}`);
        j++;
    }
    j = 1; // 초기화
    i++;
}

let value = [10, 20, 30, 40];
let x = 0;
while (x < value.length) {
    console.log(value[x]);
    x++;
}

let i = 2;
let j = 1;
while (i < 10){
    while (j < 10){
        console.log(`${i} X ${j} = ${i * j}`);
        j++;
    }
    j = 1; // 초기화
    if(i >= 4) {
        break;
    }
    i++;
}

//
let sum = 0;
let i = 0;

do {
    i++;
    sum += i;
} while (i < 10);

console.log(sum);

while (i < 10){
    while (j < 10){
        console.log(`${i} X ${j} = ${i * j}`);
        j++;
    }
    j = 1; // 초기화
    if(i == 4) {
        continue; // 무한반복
    }
    i++;
}

// 다음 루프
let i = 1;
let j = 1;
while (i < 9){
    i++;
    if(i == 4) {
        continue; // 무한반복x
    }
    while (j < 10){
        console.log(`${i} X ${j} = ${i * j}`);
        j++;
    }
    j = 1; // 초기화
}

while (let i = 0; i < 10; i++) {
    if (i === 4 || i === 5) {
        continue;
    }
    console.log(i);
}

// 레이블을 쓰는걸 권장하지 않음(안 익숙한 사람이 많아서)
// 루프가 몇개이든 원하는 위치로 바로 갈 수 있다!
// 레이블은 반드시 break문 또는 continue 문 위에 있어야 한다
// break문은 모든 레이블에서 사용할 수 있다
// continue문은 반복문에서만 사용 가능하다