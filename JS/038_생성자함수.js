///////// 사용해야 하는 이유: 객체를 찍어내기 위한 용도, 프로토타입을 이용하여 메모리 효율을 높일 수 있다
// https://ko.javascript.info/constructor-new
let book = {
    책이름: 'JavaScript',
    책가격: 1000,
    저자: '홍길동',
    출판일: '22.10.11'
};

// 예를 들어 form에서 입력받은 값
// 그런데 코드가 깔끔하지 못하다
let newBook = {}
newBook['책이름'] = 'TS';
newBook['책가격'] = 50000;
newBook['저자'] = '세원, 석규, 슬기';
newBook['출판일'] = '22.10.30';
newBook; // {책이름: 'TS', 책가격: 50000, 저자: '세원, 석규, 슬기', 출판일: '22.10.30'}

// 생성자 함수
// 함수 이름 첫 글자는 대문자로 시작
function Book(책이름, 책가격, 저자, 출판일){
    this.책이름 = 책이름;
    // this.책이름과 책이름은 다르다
    this.책가격 = 책가격;
    this.저자 = 저자;
    this.출판일 = 출판일;
}

// let data = Book('CSS', 10, '유진', '22.12.30'); // undefined, return이 생략되어 있으니까

let book1 = new Book('CSS', 10, '유진', '22.12.30');
book1; // {책이름: 'CSS', 책가격: 10, 저자: '유진', 출판일: '22.12.30'}
// 코드가 더 깔끔
// 메모리 효율이 객체보다 더 좋음
let book2 = new Book('HTML', 20, '유진', '23.12.30');
let book3 = new Book('Python', 30, '유진', '24.12.30');

// new 키워드를 사용할 경우 내부적으로 다음과 같이 동작한다
function Book(책이름, 책가격, 저자, 출판일){
    // this = {}
    this.책이름 = 책이름;
    this.책가격 = 책가격;
    this.저자 = 저자;
    this.출판일 = 출판일;
    // return this;
}