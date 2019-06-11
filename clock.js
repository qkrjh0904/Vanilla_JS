const clockContainer = document.querySelector(".js-clock");    //querySelector는 children중에서 탐색
const colckTitle = clockContainer.querySelector("h1");  //js-clock class의 자식 중에서 h1 탐색

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    colckTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init(){
    getTime();
}
init();