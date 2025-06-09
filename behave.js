const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate(){

    const now = new Date();

    const getHours = now.getHours();
    const getMinutes = now.getMinutes();
    const getSeconds = now.getSeconds();
 
    const hourDegree = (getHours / 12 ) * 360;
    const minuteDegree = (getMinutes / 60 ) * 360;
    const secondDegree = (getSeconds / 60 ) * 360;
   
    hour.style.transform = `rotate(${hourDegree}deg)`;
    minute.style.transform = `rotate(${minuteDegree}deg)`;
    second.style.transform = `rotate(${secondDegree}deg)`;

}

setInterval(setDate, 1000);
