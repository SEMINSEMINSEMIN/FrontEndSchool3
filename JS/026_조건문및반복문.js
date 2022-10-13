// 구조

let 조건식 = true;

if (조건식) {
    // 조건식이 참일 경우 실행될 코드
    console.log("중괄호를 사용했습니다.");
}

if (조건식) console.log("중괄호를 사용했습니다.");

let 조건식1 = true;
let 조건식2 = true;

if (조건식1) {
    console.log(1);
} else if (조건식2) {
    console.log(2);
} else {
    console.log(3);
}

let money = 1000;
let score = 89;

if (score > 90) {
    console.log('mom : "I\'m so happy"');
    money += 1000000;
} else if (score > 80) {
    console.log('mom : "I\'m happy');
    money += 100000;
} else if (score > 70) {
    console.log('mom : happy?');
    money += 10000;
} else if (score > 60) {
    console.log('mom : happy?!!!');
    money = 0;
}

// 이렇게 코드 중첩을 할 필요가 없음
if (score > 90) {

    console.log('mom : "I\'m so happy"');
    money += 1000000;
} else if (score > 80) {
    if (money >= 100000000) {
        money -= 10000000;
        // if문 중첩
    }
    console.log('mom : "I\'m happy');
    money += 100000;
} else if (score > 70) {
    if (money >= 100000000) {
        money -= 10000000;
        // if문 중첩
    }
    console.log('mom : happy?');
    money += 10000;
} else if (score > 60) {
    if (money >= 100000000) {
        money -= 10000000;
        // if문 중첩
    }
    console.log('mom : happy?!!!');
    money = 0;
}

// 이렇게 밖으로 빼는게 좋음
if (money >= 100000000) {
    money -= 10000000;
    // if문 중첩
}
if (score > 90) {
    console.log('mom : "I\'m so happy"');
    money += 1000000;
} else if (score > 80) {
    console.log('mom : "I\'m happy');
    money += 100000;
} else if (score > 70) {
    console.log('mom : happy?');
    money += 10000;
} else if (score > 60) {
    console.log('mom : happy?!!!');
    money = 0;
}


// switch: 강사님은 잘 사용하지 않으심
// 장점: 가독성
// 무기의 종류
let value3 = 'three';

switch (value3) {
    case 'one':
        console.log(1);
        break; // 탈출
    case 'two':
        console.log(1);
        break; // 탈출
    case 'three':
        console.log(1);
        break; // 탈출
    case 'four':
        console.log(1);
        break; // 탈출
}
// 3

// break가 없을 경우
switch ('two') {
    case 'one':
        console.log(1);
    case 'two':
        console.log(2);
    case 'three':
        console.log(3);
    case 'four':
        console.log(4);
}
// 2 3 4

// 삼항 연산자