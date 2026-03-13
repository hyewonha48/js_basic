// array_func.js
// 여러개의 값을 변수에 저장할 수 있는 배열
// 특정 동일 주제에 묶여있는 2개 이상의 값을 배열로 묶음

// 배열을 사용하지 않은 경우
const month = '월';
const tue = '화';
console.log(month,tue);

// 배열을 사용한 경우
const yoil = ['월','화','수','목','금','토','일'];
console.log(yoil); // 모든 배열 출력
console.log(yoil['0']); // 배열값 중 원하는 인덱스 출력
console.log(yoil.length); // 요일 객체의 길이속성

// ======================= 배열 기초1
// 원하는 색상을 자유롭게 6개 배열로 저장하고 그중 좋아하는 색상만 인덱스로 골라 콘솔로그 출력하기

const colors = ['#BBE0EF','#003049','#5E0006','#D62828','#F77F00','#FCBF49'];
console.log(colors);
console.log(`${colors} 중에서 내가 좋아하는 색상은 ${colors['1']},${colors['3']}입니다.`);

// 배열생성법2
// new Array() 내장함수 선언법

let wh = new Array(2);
console.log(wh); // 숫자 2를 만든게 아니라 2개의 공간, 자리를 만든것 (숫자2대입X / 빈배열위치 2자리 삽입O)

wh[0] = 100;
wh[1] = 50;
console.log(wh);

// ======================= 신발 쇼핑몰 색상/사이즈 배열
let colorSize = new Array(2);

// colorSize[0] = prompt('pink,whtlet 중 하나를 선택하세요')
// colorSize[1] = prompt('220,230,240 중 하나를 선택하세요')
colorSize[0] = 'pink';
colorSize[1] = 220;

let order = `주문옵션 : 색상${colorSize[0]}, 사이즈:${colorSize[1]}`;
console.log(order);

// ======================= 의류 쇼핑몰 선택옵션으로 배열만들기
// 사이즈 : S, M, L / 색상 : 화이트, 그레이, 블랙 / 추가상품 : 양말, 손수건
let itemArr = new Array(3);

// itemArr[0] = prompt('S, M, L 중 선택하세요.');
// itemArr[1] = prompt('화이트, 그레이, 블랙 중 선택하세요.');
// itemArr[2] = prompt('양말, 손수건 중 선택하세요.');
itemArr[0] = 'S';
itemArr[1] = '화이트';
itemArr[2] = '양말';

order = `주문옵션 : 사이즈:${itemArr[0]}, 색상:${itemArr[1]}, 추가상품:${itemArr[2]}`;
console.log(order);

// 날씨소식 앱
// 출력예시1) 오늘은 맑음, 내일은 비 소식이 있습니다.
// 출력예시2) 오늘은 흐림, 내일은 눈 소식이 있습니다.
// 출력예시3) 오늘은 눈, 내일은 맑음 소식이 있습니다.
// 날씨 상태를 저장한 배열 
const weather = ['맑음','흐림','비','눈']; // 0 1 2 3

// 함수 실행시 마다 다른 데이터를 전달하는 매개 변수
weatherFunc(weather[0], weather[2]);
weatherFunc(weather[1], weather[3]);
weatherFunc(weather[3], weather[0]);

function weatherFunc(today, tomorrow) { // today,tomorrow = 매개변수, 호출값 받는 역할
    let msg = `오늘은 ${today}, 내일은 ${tomorrow} 소식이 있습니다.`; // 전달받은 값 출력
    console.log(msg);
}

// ======================= 영화 좌석 예매 배열+함수
// 일반 2명 좌석 선택 기준
// 일반 1명당 표 가격은 10,000원 => 2명 2만원 출력
let cgvSeat = new Array(3);
const price = 10000; // 일반 1인 가격 만원 준비

cgvSeat[0] = 'A1';
cgvSeat[1] = 'A2';
// cgvSeat[2] = 'A3';

// 함수호출
cgvFunc(cgvSeat[0],cgvSeat[1],price*cgvSeat.length);

function cgvFunc(one,two,won){
    let movie = `일반 2명 예약한 좌석은 ${one}, ${two}이고,`;
    movie += `결제 가격은 ${won.toLocaleString('ko-kr')}원 입니다.`;
    console.log(movie);
}

// ======================= 구구단 함수 (매개변수)

//함수호출
dan99(2); // ()안에 생성된 매개변수 자리에 대입해야하는 값 입력 위치
dan99(3); 
dan99(4); 
dan99(5); 
dan99(6); 
dan99(7); 
dan99(8); 
dan99(9); 

function dan99(num) { // 매개변수 생성 (호출시 대입받는 값을 받는 위치)
    let dan = '';
    dan += `${num}X1=${num*1}\n`; //num 호출 시 대입받은 값을 최종 전달받는 위치
    dan += `${num}X2=${num*2}\n`;
    dan += `${num}X3=${num*3}\n`;
    dan += `${num}X4=${num*4}\n`;
    dan += `${num}X5=${num*5}\n`;
    dan += `${num}X6=${num*6}\n`;
    dan += `${num}X7=${num*7}\n`;
    dan += `${num}X8=${num*8}\n`;
    dan += `${num}X9=${num*9}\n`;
    console.log(dan);
}