// operator.js
let greeting = '안녕'+'봄'; // 두개이상 반복 데이터여서 변수에 저장
// let greeting 변수생성
// '안녕'+'봄' 문자열 2개 연결
// = 우측의 값을 좌측 변수로 대입
console.log(greeting+'잘가'); // '잘가'는 일회성 데이터여서 그냥 사용
// connsol.log() 객체.함수()
// connsol 출력되고 싶은 위치대상(객체)
// log 실행하고 싶은 함수 명령어
console.log(typeof(greeting)); //변수의 데이터타입은?
// greeting변수의 데이터타입을 typeof함수로 확인하고 console.log로 출력한다.

let a = 1; // 숫자대입 a
let b = '1'; // 문자대입 b
// 결과를 담는 변수
let total = a+b; // 1+'1' = 1'1'
//결과를 출력하는 함수
console.log(total);

let x;
const y = '20';
console.log(x,y); // 값이 정의안됨(Undefined), '20'
console.log(y+a); //201
// y 초기화하고 싶다 >> 불가능 >> const 상수는 변경 불가
x = '10'; // x는 정의가 되지 않았다가 문자 10을 대입받은 상태
console.log(x+y); //1020
console.log(x,y); //10 20
x = null; // x변수의 값을 제거, 초기화한다 null=0
console.log(x+y); // null20 : 문자가 있을땐 문자연결로 취급해서 null 자체도 동일한 문자취급 함
console.log(x+a); // 1 : 문자가 아닌 숫자라 초기화

console.log('----------------------------------------------')
// 함수 : log(), typeof(), prompt(), Number()
// *대입연산자'='있으면 오른쪽부터 읽기
//prompt() 질문, 답변 창을 띄우는 함수 (문자열로 인식)
// Number() = 괄호안의 데이터를 숫자로 변환하는 함수
// 유치원생 대상 두 수를 더하는 문제 프로그래밍 ex.1+4=??
//const num1 =  prompt('첫번째 수를 입력하세요');
const num1 = Number(prompt('첫번째 수를 입력하세요'));
// 1. const num1 상수생성
// 2. prompt() 질문하고 사용자에게 문자열답변 받고
// 3. Number() 문자열을 숫자로 변환 
// 4. = 대입연산자로 num1 대입
const num2 = Number(prompt('두번째 수를 입력하세요'));
// console.log(num, typeof(num1));
// 결과 담는 변수
const result = num1 + num2;
//const result = Number(num1) + Number(num2) // Number 숫자 변환
// 결과 출력
console.log(result);
// 1+1의 정답은 2입니다~!
console.log(`${num1}+${num2}의 정답은 ${result}입니다~!`);