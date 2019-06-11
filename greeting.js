const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveNmae(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault(); //form의 디폴트값인 엔터를 누르면 어디로 보내고 새로고침 하는것을 막음
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveNmae(currentValue);
}

function aksForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser == null){
        aksForName();
    } else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();