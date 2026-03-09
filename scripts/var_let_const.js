// 객체(제어목적데이터), 속성(객체속성), 메서드(객체실행)
console.log(bowl); //변수 정의되지 않음 (undefined(error)) 
var bowl; //빈그릇
console.log(bowl); //변수 값 정의되지 않음
bowl = '밥'; //'',"" 문자데이터를 변수에 대입 (undefined)
console.log(bowl); 
bowl = '콩'; //기존 '밥' 데이터 제거하고 새로운 '콩' 데이터 대입
console.log(bowl); //concsole객체에 메서드log로 bowl변수를 실행

consol.log('----------');
// 변수 a,b,c 대입연습
// 1. 변수생성
var a;
var b;
var c;
console.log(a, b, c);  // 값 정의안됨*3 undefined
a = 1; // var 안쓴이유:위에서 이미 선언되었으니까
console.log(a) // 실행위치에 따라 다른 값 출력
b = 2;
c = 3;
console.log(a, b, c); // 1 2 3
a = b; // b변수값을 a변수에 대입한다 (a변수의 기존값 제거)
b = c; // c변수값을 b변수에 대입한다 (b변수의 기존값 제거)
console.log(a, b, c); // 2 3 3

// let과 var의 차이점
// box1,box2 변수연습
var box1; //
let box1;
console.log(box1, box2);
var box = 10; // 중복 변수 생성시 에러 못잡음
console.log(box1);
let box2 = 20; // 중복선언 불가, 에러발생
box2 = 20; // 이미 생성됬으므로 생성키워드 제외하고 대입
console.log(box2);

// let, conts 비교
// x,y 변수
let x = -10; // 생성(let)과 대입(=) 동시수행
const y = 5; // 상수 5 생성, 대입 동시수행
console.log(x,y);
x = 0; // x값 변경(기존값 제거)
// y = 7; // 상수를 변경하려고 하면 에러

// 웹사이트 가입 회원정보 변수
// 이름,나이, 사는 곳의 데이터를 담는 변수 생성하기
let user_name = '홍길동'; // 이름을 개명할 수 있으니까...
let user_age = 20;
let user_address = '인천시';
console.log('홍길동') // x 변수에 담긴 데이터 사용시 데이터 그대로 출력안됌
console.log('user_name') // o 변수명을 활용해서 데이터 출력
//홍길동은 20살이고 인천시 부평구에 삽니다
//user_name은 user_ag살이고 user_residence에 삽니다.
console.log(user_name+'은 '+user_ag+'살이고 '+user_address+'에 삽니다.')
console.log(`${user_name}은 ${user_age}살이고 ${user_address}삽니다.`);
// + 연결연산자, 더하기 연산자
// 홍길동은 내년에 21살이 됩니다. //let user_nextyear_age = user_age+1; console.log(user_name+'은 내년에 '+user_nextyear_age+'살이 됩니다.')
console.log(user_name+'은 내년에 '+(user_age+1)+'살이 됩니다.')
// 홍길동은 오늘 21살이 됬습니다.
user_ag = 21;
console.log(user_name+'은 오늘 '+user_age+'살이 됐습니다.')

//쇼핑몰 상품 변수
// 상품명 : 후드 윈드 브레이커
// 가격 : 53910
// 상품명, 가격, 수량 변수 생성하기
const Product_name = '후드 윈드 브레이커'
const Product_price = 53910
let Product_number = 1
// 후드윈드브레이커 1개의 가격은 53910원 입니다.
console.log(Product_name+ +Product_number+'의 가격은' +Product_price+'원 입니다.')
//템플릿문자열 활용 출력
console.log(`${Product_name} ${Product_price}의 가격은 ${Product_price}원 입니다.`)
//주문수량 3개, 총 결제금액은 161730원 입니다.
Product_number = 3
console.log(`주문수량 ${Product_number}개, 총 결제금액은 ${Product_price*Product_number}원 입니다.`)