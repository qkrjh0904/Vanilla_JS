const clockContainer = document.querySelector(".js-clock");    //querySelector는 children중에서 탐색
const colckTitle = clockContainer.querySelector("h1");  //js-clock class의 자식 중에서 h1 탐색

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    colckTitle.innerText = `${hours < 10 ? `0${hours}` : hours } : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000); //setInterval(func, time) : function을 time시간 간격으로 재시작
}
init();