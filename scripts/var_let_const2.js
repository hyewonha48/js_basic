//쇼핑몰 상품 변수
// 상품명 : 후드 윈드 브레이커
// 가격 : 53910
// 상품명, 가격, 수량 변수 생성하기
const Product_name = '후드 윈드 브레이커'
const Product_price = 53910
let Product_number = 1
console.log(Product_name+'의 가격은 '+Product_price+'이고 현재 재고는'+Product_number+'입니다')

let user_name = '홍길동';
let user_age = 20;
let user_address = '인천시';
console.log(`${user_name}은 ${user_age}살이고 ${user_address}에 삽니다.`);
// 후드윈드브레이커 1개의 가격은 53910원 입니다.
console.log(Product_name+ +Product_number+'개의 가격은' +Product_price+'원 입니다.')
//템플릿문자열 활용 출력
console.log(`${Product_name} ${Product_number}개의 가격은 ${Product_price}원 입니다.`)
//주문수량 3개, 총 결제금액은 161730원 입니다.
Product_number = 3;
console.log(`주문수량 ${Product_number}개, 총 결제금액은 ${Product_price*Product_number}원 입니다.`)
// Product_number 변수의 데이터종류는?
console.log(`Product_number변수의 데이터 종류는 ${typeof Product_number}`)

// var_let_const 에러로 var_let_const2 새로만듬, 같은내용++