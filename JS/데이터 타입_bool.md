# 1. Falsy 값
* false
* undefined
* null
* NaN
* 빈 문자열
* 0, -0
# 2. 명시적 타입 변환
## 2.1. Boolean()
```javascript
console.log(Boolean('')); // false
console.log(Boolean(' ')); // true
console.log(Boolean('abc')); // true

console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(100)); // true
console.log(Boolean(-100)); // true
console.log(Boolean(NaN)); // false
console.log(Boolean(Infinity)); // true

console.log(Boolean(null)); // false

console.log(Boolean(undefined)); // false

console.log(Boolean([])); // true
console.log(Boolean({})); // true
```
## 2.2. !!
```javascript
console.log(!!''); // false
console.log(!!'false'); // true

console.log(!!0); // false
console.log(!!NaN); // false
console.log(!!1); // true
console.log(!!Infinity); // true

console.log(!!null); // false

console.log(!!undefined); // false

console.log(!!{}); // true
console.log(!![]); // true
```

# 3. 암묵적 타입 변환
조건식의 평가 결과는 불리언 타입으로 암묵적 타입 변환된다.
```javascript
if ('') console.log('1');
if (true) console.log('2');
if (0) console.log('3');
if ('str') console.log('4');
if (null) console.log('5');
// 2 4
```

