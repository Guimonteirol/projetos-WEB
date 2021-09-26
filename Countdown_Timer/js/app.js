const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');

const birthday = "11 Dec 2021";

function countdown(){
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();

    const tsegundos = (birthdayDate - currentDate) / 1000;

    const dias = Math.floor(tsegundos / 3600 / 24);
    const horas = Math.floor(tsegundos / 3600) % 24;
    const minutos = Math.floor(tsegundos / 60) % 60;
    const segundos = Math.floor(tsegundos) % 60;

    diasEl.innerHTML = dias;
    horasEl.innerHTML = horas;
    minutosEl.innerHTML = minutos;
    segundosEl.innerHTML = segundos;
    
  
}

countdown();

setInterval(countdown, 1000);

