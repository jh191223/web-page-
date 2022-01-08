let target =document.querySelector("#dynamic")
// let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Python","Learn to JavaScript"];
// let selectString = stringArr[Math.floor(Math.random()*stringArr.length)]
// //floor 소수점 버림
// //커서 깜빡임 효과 
// let selectStringArr = selectString.split("");

function randomString(){
    let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to Python","Learn to JavaScript"];
    let selectString = stringArr[Math.floor(Math.random()*stringArr.length)]
    //floor 소수점 버림
    //커서 깜빡임 효과 
    let selectStringArr = selectString.split(""); // 한글자씩 분리
    return selectStringArr;
}

//타이핑 리셋
function resetTyping(){
    target.textContent="";
    dynamic(randomString()) // 리셋 후 다음 문자열을 불러옴 
}

//한글자씩 텍스트 출력 함수 
//재귀 함수 
//setTimeout내에서 자신의 함수를 참조할 시 계속 반복됨
function dynamic(randomArr){
    if(randomArr.length>0){
        target.textContent += randomArr.shift();//하고 싶은 동작
        setTimeout(function(){
            dynamic(randomArr);
        },80);
    }else{
        setTimeout(resetTyping,3000);
    }
}

dynamic(randomString());

function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);
//toggle 함수 : 껏다 켯다 하는 함수 

