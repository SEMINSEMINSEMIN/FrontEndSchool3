let 호텔 = [
    {
        '이름': '하나호텔1',
        '방의개수': 50,
        '예약자수': 25,
        '남은방의개수': function(){return this.방의개수 - this.예약자수}
    }, {
        '이름': '하나호텔2',
        '방의개수': 40,
        '예약자수': 25,
        '남은방의개수': function(){return this.방의개수 - this.예약자수}
    }, {
        '이름': '하나호텔3',
        '방의개수': 30,
        '예약자수': 25,
        '남은방의개수': function(){return this.방의개수 - this.예약자수}
    },
    {
        '이름': '하나호텔4',
        '방의개수': 25,
        '예약자수': 25,
        '남은방의개수': function(){return this.방의개수 - this.예약자수}
    }
];



function getEmptyRoomCount(hotel) {
    return hotel.방의개수 - hotel.예약자수;
}

console.log(호텔[0].남은방의개수()); // 자료구조 파악에 용이
console.log(getEmptyRoomCount(호텔[0])); // 메모리 공간 효율성