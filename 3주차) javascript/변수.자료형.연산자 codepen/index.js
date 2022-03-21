// 변수 : 선언. 초기화. 재할당

const 변수1 = "코딩";
let 변수2 = "자바스립트";

// 변수1 = '코딩은 어려워';
변수2 = "html";

// ====================================

// 데이터 타입, 자료형 :
// 1. string : 문자열

const str = "안녕";
const str2 = "hi";
const num = "2!!";

// 2.number : 숫자
const number = 2;

// 3. bigInt : 큰값이 숫자

// 4. boolean : true, false
const bool = true;
const bool1 = false;

// 5. symbol : 중복되지 않는 고유값

// 6-7. null / undefined

const a = undefined;
const b = null;

let variable;
console.log(variable);

// 8. object : 객체 - 함수, 배열, 객체

// ====================================

// 1. 산술연산자 : +, - , /, *, %, **, ++, --

const aa = 10 % 3;
console.log(aa);

const bb = 10 ** 2;
console.log(bb);

let cc = 5;
cc += 10; // cc = cc + 10
console.log(cc);

cc -= 8; // cc = cc - 8;
console.log(cc);

// 2. 할당 연산자 : =

// 3. 문자열 연산자 : + , +=
let data = "happy" + " " + "2022";
console.log(data);

data += "!!"; //data = data + '!!'
console.log(data);

// 비교 연산자 :
// 1. == :  대충 비교
// 2. === : 엄격하게 비교
// 3. != : 대충 비교
// 4. !== : 엄격하게 비교
// 5. 부등호 : > , <, >= , <=

//논리연산자 : &&, ||, !
// && : 조건 중 하나라도 false가 되면 => false
// || : 두개의 조건이 모두 false여야지 => false
// ! : 반대
