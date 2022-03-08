// if문
// false : 0, -0, null, false, NaN, undefined, ''

let age = 15;

// if ( age > 19 ) {
//   console.log('술을 마실 수 있다');
// }

// console.log('미성년자');

// ==============================================
// if, else문

// if ( age > 19 ) {
//   console.log('술을 마실 수 있다');
// } else {
//   console.log('미성년자');
// }

// ==============================================
// 삼항연산자 : 조건 ? 참일때 실행될 코드 : 기짓일때 실행될 코드

// const result = age > 19 ? '술을 마실 수 있다':  '미성년자';
// console.log(result);

// ==============================================
// if, else if, else문

// if (age < 10) {
// 	console.log('애기');
// } else if (age >= 10 && age < 20) {
// 	console.log('10대');
// } else if (age >= 20 && age < 30) {
// 	console.log('20대');
// } else if (age >= 30 && age < 40) {
// 	console.log('30대');
// } else if (age >= 40 && age < 50) {
// 	console.log('40대');
// } else if (age >= 50 && age < 60) {
// 	console.log('50대');
// } else if (age >= 60 && age < 70) {
// 	console.log('60대');
// } else {
// 	console.log('노인');
// }

// age = 63;

// if (age >= 70) {
// 	console.log('노인');
// } else if (age >= 60) {
// 	console.log('60대');
// } else if (age >= 50) {
// 	console.log('50대');
// } else if (age >= 40) {
// 	console.log('40대');
// } else if (age >= 30) {
// 	console.log('30대');
// } else if (age >= 20) {
// 	console.log('20대');
// } else if (age >= 10) {
// 	console.log('10대');
// } else {
// 	console.log('애기');
// }

// ==============================================
// switch문

age = 30;

switch (age) {
  case 70:
    console.log("70대");
    break;
  case 60:
    console.log("60대");
    break;
  case 50:
    console.log("50대");
    break;
  case 40:
    console.log("40대");
    break;
  case 30:
    console.log("30대");
    break;
  case 20:
    console.log("20대");
    break;
  case 10:
    console.log("10대");
    break;
  default:
    console.log("애기");
}
