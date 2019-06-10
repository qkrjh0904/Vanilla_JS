// coment of JS
/*comment of JS*/
/* ---------- Data Type ----------
const name = "jeongho";     //String
const age = 27;             //const number
let b = age-5;              //number
const num = 11.1;           //const float num
const yesOrNo = false;    //boolean

console.log(name, age, b, num, yesOrNo);
*/

/* ---------- Arrays ----------
const name = "Jeongho";
const daysOfWeek = ["Mon","Tue", "Wed", "Thu", "Fri", "Sat", "Sun", name, true, 10, 10.1]; //지금과 같이 중간중간 구분으로 대문자를 넣는것을 camel space라고 한다. 낙타 등처럼.
console.log(daysOfWeek);
*/

/* ---------- Object ----------
const myInfo = {
    name:"Jeongho",
    age:27,
    gender:"Male",
    isHandsome:true,
    favFood:["Chicken","Pizza", "Bugger"]
}

console.log(myInfo);
*/

/* ---------- Functions ----------
function sayHello(name, age){    //인자받기
    let s = "Hello " + name + ". Your age is " + age +".";  //인자 사용하기
    console.log(s);   //문자열 출력 표현 1
    console.log(`Hello ${name}. Your age is ${age}.`);  //문자열 출력 표현 2
    return `Hello ${name}. Your age is ${age}.`;    //문자열 출력 표현 3
}
const greetJeongho = sayHello("Jeongho", 27);
console.log(greetJeongho);    //함수 호출후 인자 전달

const calculator = {
    plus: function(a, b){
        return a+b;
    }
}
const plus = calculator.plus(5, 5)
console.log(plus)
*/

/* ---------- Modifying the DOM with JS ----------
//const title = document.getElementById("title");
const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS";
title.style.color = "red";
console.dir(title);
*/
/* ---------- Events and event handlers ----------
const title = document.querySelector("#title");
function handleClick(){
    title.style.color = "blue";
}
title.addEventListener("click", handleClick)
*/

/* ---------- if-else if-else ----------
const age = prompt("How old are you?")
if(age>20) {
    console.log("You can drink");
} else {
    console.log("You can't drink");
}
*/


const title = document.querySelector("#title");
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handlerClick(){
    const currentColor = title.style.color;
    if(currentColor==BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}
function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handlerClick)
}
init();

function handleOffline() {
    console.log("go");
}
window.addEventListener("offline", handleOffline);