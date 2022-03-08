// 배열
// 1. 선언 : [], new Array(), 빈배얄에 index 이용해서 하나씩 추가
// const travel_spot = ['방콕', '뉴욕', '파리'];
// const travel_spot = new Array('방콕', '뉴욕', '파리');
// console.log(travel_spot);
const travel_spot = new Array();
travel_spot[0] = "방콕";
travel_spot[1] = "뉴욕";
travel_spot[2] = "파리";

// 2. 접근 : index
const paris = travel_spot[2];
console.log(paris);

// 3. 추가 및 삭제

// travel_spot = ['토론토', '멜버른', '바르셀로나', '아테네']; //재할당 불가

// push : 뒤에 원소 추가
travel_spot.push("토론토", "퀘백");
console.log(travel_spot);

// unshift : 앞에 원소 추가
travel_spot.unshift("바르셀로나");
console.log(travel_spot);

// splice : 원하는 지점에 추가 및 삭제
// -> splice(시작 index, 삭제하고 싶은 원소의 개수, 추가하고 싶은 원소들)
travel_spot.splice(4, 0, "멜버른", "아테네");
console.log(travel_spot);

// pop : 뒤에서 원소 삭제
const result = travel_spot.pop();
console.log(travel_spot, result);

// shift : 앞에서 원소 삭제
const result1 = travel_spot.shift();
console.log(travel_spot, result1);

// splice
const result2 = travel_spot.splice(3, 3);
console.log(travel_spot, result2);

travel_spot.splice(1, 1, "이스탄불", "하노이");
console.log(travel_spot);
