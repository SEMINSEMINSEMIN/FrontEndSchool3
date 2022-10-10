// 삼항연산자를 중첩해서 쓰는 것은 좋지않은 습관!

// 조건식 ? 참일 경우 실행되는 표현식 : 거짓일 경우 실행되는 표현식

let item = true ? 100 : 200;
console.log(item); // 100

// 중첩시 가독성이 떨어진다
const price = 7000;
const message = (price > 6000) ? 'expensive' : 
                (price < 3000) ? 'so cheap' : 'so so';
console.log(message); // so so

