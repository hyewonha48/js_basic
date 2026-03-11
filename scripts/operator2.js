// operator2.js
// 증감연산자 ++,--
let x = 5; // x 변수생성 >> 숫자5를 x에 대입
// let y = ++x; // y 변수생성 >> 1증가한 x를 대입
let y = x++; // y 변수생성 >> x대입 후 나중에 1증가
console.log(x,y);

let a;
let b;
let c;
let d;
// 변수만 생성하고 값이 정의안된 상태(Undefined)
a = 1;
b = 2;
c = 3;
d = 4;
console.log(`a=${a}, b=${b}, c=${c}, d=${d}`); // a=1, b=5 템플릿 문자열
/* ++,-- */
a = d--;
//* `++a` 더하고연산 `a++` 연산더하기
console.log(`a=${a}, b=${b}, c=${c}, d=${d}`)
let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;
// num1=10, num2=20, num3=30, num4=40,
num1++; // 대입연산자가 없으면 증감연산자 앞,뒤 의미없음
num2--;
num3++;
num4--;
// num1=11, num2=19, num3=31, num4=39,
console.log(num1,num2,num3,num4);
num1 = ++num2; // 전위연산
num2 = num1++; // 후위연산
console.log(num1,num2,num3,num4);
// num1=21, num2=20, num3=31, num4=39,
num3 = num1+num2;
num4 = ++num3; //전위
console.log(num1,num2,num3,num4);
// num1=21, num2=20, num3=42, num4=42,
num1 = ++num3 + 10;
num2 = --num4 + 1;
console.log(num1,num2,num3,num4);
// num1=53, num2=42, num3=43, num4=,41

// =========== 증감연산자 + 질문답변함수
// 문제
// const num = prompt('구입수량을 입력하세요')
// let plus = num++;
// let result = `1+1 행사로 총 구입수량은 ${plus}개 입니다.`
// console.log(result);

// 내 풀이
// const num = Number(prompt('구입수량을 입력하세요'));
// let plus = num + 1;
// let result = `1+1 행사로 총 구입수량은 ${plus}개 입니다.`;
// console.log(result);

// 정석적인 방법
// let num = Number(prompt('구입수량을 입력하세요')); // 결과보기위해 잠깐가림
let num = Number('1'); // 가릴때 확인하려고 입력,
let plus = ++num;
let result = `1+1 행사로 총 구입수량은 ${plus}개 입니다.`
console.log(result);
// const는 변경할 수 없음 >> let변경
// prompt 문자로 데이터인식 >> Number() 숫자변환
// num++ 증가전 값이 plus 인식 >> 전위연산 ++num

// 복합대입연산자
// 증감연산자는 1 증감 처리시 사용
// 복합대입연산자는 1 이상 큰 숫자를 -,*,/,% 등에 활용
// 복합대입연산자는 새로운 값이 아닌 기존값을 활용해서 추가대입
// ex. 키 140 >> 145
let height = 140;
// height = height + 5; // X 새로운 값 5만 대입됨
height += 5; // 기존 140에 5를 더해서 대입
console.log(height); // 위와 뜻 동일, 코드 간결화

// 빼기복합
height = 10; // 새로운 값 대입
// height = height - 5;
height -= 5;
console.log(height);
// 곱하기복합
height = 20;
// height = height * 2;
height *= 2;
console.log(height);
// 나누기복합
height = 50;
height /= 10;
console.log(height);
// 나머지복합
height = 10;
height %= 5; 
console.log(height);

// =========== 복합대입연산자 예제
// 용돈기입장 앱
// 기존 지갑에 있는 돈 + 이번달에 받은 용돈 = 결과
let wallat = 10000;
let month = Number('5000');
wallat += month; // wallet = wallet + month;
// let month = Number(prompt ('이번 달 용돈 얼마 받았나요?'));
let total = `용돈을 더해서 총 ${wallat}원이 되었습니다.`;
console.log(total);

// 지갑 10000 준비
// 편의점에서 물건 구입할때 지갑의 돈이 나가는 상황
// 삼각김밥 2000, 아이스크립 3000, 과자 4000, 남은동
// 결과형태 = 편의점 총 구입비는 0000원이고 남은돈은 0000원입니다.
wallat = 10000;
let kimbab = 2000;
let icecream = 3000;
let snack = 4000;
total = kimbab + icecream + snack;
wallat -= kimbab;
result = `현재 잔액은 ${wallat}원`;
console.log(result)
wallat -= icecream;
result = `현재 잔액은 ${wallat}원`;
console.log(result)
wallat -= snack;
// result = `총 구입비는 ${total.toLocaleString('fi-fi')}원, 남은돈은 ${wallat}원 입니다`; // 지역=로컬에 맞는 화폐단위 구분하겠다 = toLocaleString
result = `총 구입비는 ${total.toLocaleString('ko-kr')}원, 남은돈은 ${wallat.toLocaleString('ko-kr')}원 입니다`;
console.log(result)