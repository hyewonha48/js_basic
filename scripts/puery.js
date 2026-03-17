// puery.js
// tag : header, nav, ul, li, a
// class : gnb, lnb
// 변수생성 태그 5개, 클래스 2개

// puery.js

// 태그 변수 5개
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const ul = document.querySelectorAll('ul'); // ul이 두개, 중복태그니까 모두 사용하기 위해 뒤에 All붙여서 사용
const li = document.querySelectorAll('.gnb > li');
const li2 = document.querySelectorAll('.gnb > li li');
// const li = document.querySelectorAll('.gnb > li');
// const a = document.querySelectorAll('a');
const gnbA = document.querySelectorAll('.gnb > li > a'); // 2
const lnbA = document.querySelectorAll('.lnb > li > a'); // 3
// 태그 클래스 변수 2개
const gnb = document.querySelector('.gnb');
const lnb = document.querySelector('.lnb');

// 콘솔 확인 (오류 조기 확인)
console.log(header,nav,ul[0],ul[1],li[1],li2,gnbA,lnbA,gnb,lnb);

// 함수 기초활용
// function 함수명(매개변수){반복실행명령어} 함수호출();
// 1. 할인율 계산기
// (100-할인율) / 100
// (100-5) 100 = 0.95
// 판매가 * 0.95

// 미리넣음 아래참고 let disCount = ''; // 빈문자:'';(추후 넣을 값을 기반으로)

// disCountfunc(24990);
// disCountfunc(85100);
console.log(disCountfunc(24990));
alert(disCountfunc(85100));

function disCountfunc(price){
    let disCount = ''; // 빈문자:'';(추후 넣을 값을 기반으로)
    disCount = `5%할인 : ${price*0.95}원,`;
    disCount += `10%할인 : ${price*0.9}원,`;
    disCount += `20%할인 : ${price*0.8}원,`;
    disCount += `30%할인 : ${price*0.7}원,`;
    
    // console.log(disCount);
    return disCount; // 함수 밖으로 호출할때 disCount 값만 내보낸다
    // 함수의 결과값은 다양한 함수로 실행할 수 있어야 하기 떄문에 함수 내부에서 실행함수를 정하는 것이 아닌 리턴으로 값만 내보내고 함수 밖에서 실행함수를 정한다
}