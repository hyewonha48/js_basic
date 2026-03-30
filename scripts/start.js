// start.js
// 객체 사용 전 반드시 변수(저장소) 등록하기
// 변수생성키워드 생성변수명;
var box; // 변수생성
var box2; // undefined(값이 정의되지 않음)
box = 1; // 값1을 box변수에 대입
box = 2; // 2
box2 = 5; // undefined -> 5 값 변경
box = box2; // 2 -> 5 변경
box2 = 10; // 5 -> 10 변경

// 변수작성법
// var data_create;
// 선언키워드 변수명
// data_create=3;
// 변수명 대입연산자(할당연산자,오른쪽 값을 왼쪽에 넣는다(대입한다)) 변수값