// function.js
// function 함수명(전달인자){'반복실행내용';}

// 실행조건이 있어야 실행할 수 있음
// 함수 function 만 쓰면, 반복함수 준비한다는 의미

// 반복함수 준비 = 함수만들어 반복을 준비
function story1(){ // 사용자정의함수
    story2(); // 콜백함수 개념
    let a = '조약돌 수집';
    a += '조약돌 떨어뜨리기'; // += 기존이야기 더하기
    a += '조약돌 따라 집 찾아오기';
    console.log(a);
}
function story2(){ // 사용자정의함수
    let b = '부모는 먹을 것이 없어';
    b += '게모가 아이들을 숲에 버리자고 제안한다';
    console.log(b);
}
// 반복함수 실행 (함수밖) = 실행
// story2(); // 콜백함수를 사용했기에 가리기
story1();

// 카페 키오스크 함수

// 내가 한 함수
//function kiosk1 () {
//    let a = '매장이용';
//    a += '포장이용';
//    a += '주문완료';
//    a += '결제방식선택';
//    a += '다음메뉴, 이전메뉴등을 통한 메뉴고르기';
//    a += '메뉴 커스텀 : 우유변경, 시럽추가 등';
//    console.log(a);
//}
//kiosk1()

function kiosk1 () {
    let cafe = '주문하기';
    cafe += '커피 메뉴 창 실행';
    cafe += '장바구니에 커피 담기';
    cafe += '결제하기';
    cafe += '결제방식 선택 창 실행';
    cafe += '결제완료';
    cafe += '영수증 출력 메세지';
    cafe += '주문완료';
    console.log(cafe);
}
kiosk1()

// 260312
// 사용자정의함수 기초연습
// 지역(블록)/전역 스코프 개념포함
// 스코프란, 변수가 접근가능한 영역 위치
// 소괄호는 선택 입력, 중괄호는 필수.

let num2 = 20;  //블록스코프 밖, (전역스코프) 전역변수 생성

fun1(); // 함수호출
// console.log(`num1+num2=${num1+num2}`); //오류 : num1이 지역변수이기에 전역변수 위치에서 사용불가(오류)

function fun1(){ // 함수준비, 블록스코프 시작
    let num1 = 10; // let 지역변수
    console.log(`num1:${num1}`); // 지역변수 출력
    console.log(`num1+num2=${num1+num2}`); // (위)콘솔주의사항 : num2 전역변수의 생성위치가 함수호출보다 위에 있어야함
} // 블록스코프 종료

// ========== 지역&전역 연습문제1
// 변수
let x = 1; // 전역변수, 전역위치에서 값 대입
let y; // 전연벽수, 값X undefined
let z; // 전연벽수, 값X undefined

console.log(x,y,z); // 1 undefined undefined (지역의 값을 인식X)

// 함수호출
func_z(); // 1+undefined -> NaN = Not a Number의 약자, 숫자가 아니라 계산할 수 없다는 뜻
func_y();

// 함수준비
function func_z() {
    z = 5; // 전역변수z 값5대입 위치 = 지역스코프 (전역에서 인식못함)
    // func_y(); // 지역변수  y10 값 인식을 위해 y10을 가지고 있는 함수 호출 
    console.log(`${x+y}`); //11
}
function func_y() {
    y = 10; // 전역변수Y 값10대입 위치 = 지역스코프 (전역에서 인식못함)
    console.log(`${x+y+z}`); //16
}

// ========== 지역&전역 연습문제2
// 변수
let snack;
console.log(snack); // undefined -> roomA 호출전

// 함수호출
roomA(); // 지역스코프 안 전역변수 대입값 발생 '초코파이'
console.log(snack); // 초코파이
roomB();
console.log(snack); // 초코파이

// 함수준비
function roomA(){
    snack = '초코파이'; // 전역변수에 문자열 '초코파이' 대입
    console.log(`A방에서 먹는 간식 : ${snack}`); // 전역변수 호출 (roomA 호출해야 가능))
    console.log(snack);
}
function roomB(){ // 함수 블록 스코프 안
    let drink = '우유'; 
    console.log(`B방에서 먹는 간식 : ${snack},${drink}`); // 전역변수 호출 (roomB 호출해야 가능)
}

// ========== 지역&전역 연습문제3
// 지갑에 든 물건 예측하기
// 지갑 - 동전, 지갑 - 지폐

// 변수
// 변수의 이름이 같아도 그 변수가 전역/지역으로 나눠져 있다면 동일선정이 가능하다
let wallat ='동전'; // 전역변수

// 함수호출
bank() // 결과는? 지역변수의 값 = 지폐
console.log(`wallat : ${wallat}`); // 전역변수의 값 = 동전

// 함수준비
function bank() {
    let wallat = '지폐';
    console.log(wallat); // 지역변수
    console.log(`wallat:${wallat}`);
}

// ==========매개변수 활용 함수 응용1
// ========== 함수 내 전달인자(매개변수)
// 함수가 반복될때마나다 데이터를 바꾸고 싶을때 매개변수가 필요하다
// 매개변수 : 함수를 호출할때마다 데이터를 받는 변수를 함수 내에서 생성
// 오늘의 급식메뉴 -> 학생요청시 급식 메뉴 호출

//함수호출
school('부대찌개'); //학생1 요청 -> 호출
school('파스타'); //학생2 요청 -> 호출
school(); //학생3 요청 -> 호출

//함수준비
function school(meals='김밥'){ //기본값=김밥, 필요시 사용 //매개변수는 let, conts 없이도 알아서 변수인식 
    //let meals = '부대찌개';
    console.log(`오늘의 급식 메뉴 : ${meals}`);
}

// 매개변수 연습
color('텐저린');
color('다크네이비');
color('마르살라');

function color(colorName){
    console.log(`내가 좋아하는 색상은 : ${colorName}`);
}

// ========== 매개변수 활용 함수 응용2
// 헨젤과 그레텔의 집찾는 재료(매개변수:material) 찾아주기

house(); // 매개변수의 기본값이 있을땐 값을 비워둬도 됨 // house('조약돌');
house('빵부스러기');

function house(material='조약돌'){
    let story ='';
    story += `헨젤은 ${material}를(을) 떨어뜨리면서 숲으로 갔습니다.`;
    story += `계모가 떠나고`;
    story += `헨젤은 ${material}를(을) 따라서 집으로 돌아갔습니다.`;
    console.log(story);
}

// ========== 커피주문 매개변수 함수1
// 출력예시) 손님 요청에 따라 다른 메뉴와 잔 수가 출력
// 카페라떼 1잔 주문완료 / 아메리카노 2잔 주문완료

coffee('카페라떼');
coffee('아메리카노',2);

function coffee(menu, num=1) { // 기본값 1잔 설정 // 매개변수를 한개이상 쓰는 법 = , 콤마
    console.log(`${menu} ${num}잔 주문완료`);
}

// ========== 장바구니 함수 + 매개변수
// 한라봉 3kg 25,900원 1개 / 치아바타 샌드위치 11,880원 2개

cart('한라봉',25900);
cart('치아바타 샌드위치',11880,2);

function cart(product,Price,num=1){
    let item = '';
    item += `상품명 : ${product}`;
    item += `가격 : ${Price.toLocaleString('ko-kr')}원`;
    item += `수량 : ${num}개`;
    // console.log(item);
    console.log(`${item} 총 금액 ${Price*num}원`);
}

// ========== 매개변수 활용 키오스크
// ========== 커피주문 매개변수 함수2
// 카페메뉴 배열
// const menuAll = []; // 빈 배열
const menuAll = ['카페라떼','아메리카노','녹차라떼'];
console.log(menuAll);
console.log(menuAll[1]);

cafe('따뜻한', 0, 2); // cafe('따뜻한', '카페라떼', 2); 배열로 나타내기 위해 가려둠
cafe(undefined, 1); // cafe(undefined, '아메리카노');
cafe('따뜻한', 2, 2); // cafe('따뜻한', '녹차라떼', 2);
cafe(undefined, 1); //cafe(undefined, '아메리카노');

// cafe('아메리카노') // cafe('', '아메리카노') // 오류해결! (O) console.log -> 차가운 아메리카노 -> 함수호출에 키워드 undefined 추가!
// function cafe(Temperature='차가운', menu, num=1) {} // 오류! (X) console.log -> 아메리카노 undefined 1
// ★설명참고★ img.src = "./img/study.1.png";

function cafe(Temperature='차가운', menu, num=1) {
    let coffee = '';
    coffee += `온도 : ${Temperature}`;
    coffee += `메뉴 : ${menu}`;
    coffee += `수량 : ${num}`;
    console.log(`${Temperature} ${menuAll[menu]} ${num}잔 주문 완료되었습니다.`);
}