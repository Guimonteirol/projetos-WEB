
const dias1El = document.getElementById('dias1');
const horas1El = document.getElementById('horas1');
const minutos1El = document.getElementById('minutos1');
const segundos1El = document.getElementById('segundos1');

const newyear = "1 Jan 2022";

function countdown1(){
    const newyearDate = new Date(newyear);
    const currentDate1 = new Date();

    const tsegundos1 = (newyearDate - currentDate1) / 1000;

    const dias1 = Math.floor(tsegundos1 / 3600 / 24);
    const horas1 = Math.floor(tsegundos1 / 3600) % 24;
    const minutos1 = Math.floor(tsegundos1 / 60) % 60;
    const segundos1 = Math.floor(tsegundos1) % 60;

    dias1El.innerHTML = dias1;
    horas1El.innerHTML = horas1;
    minutos1El.innerHTML = minutos1;
    segundos1El.innerHTML = segundos1;
    
  
}

countdown1();

setInterval(countdown1, 1000);


const diasvEl = document.getElementById('diasv');
const horasvEl = document.getElementById('horasv');
const minutosvEl = document.getElementById('minutosv');
const segundosvEl = document.getElementById('segundosv');

const summer = "21 Dec 2021";

function countdownv(){
    const summerDate = new Date(summer);
    const currentDatev = new Date();

    const tsegundosv = (summerDate - currentDatev) / 1000;

    const diasv = Math.floor(tsegundosv / 3600 / 24);
    const horasv = Math.floor(tsegundosv / 3600) % 24;
    const minutosv = Math.floor(tsegundosv / 60) % 60;
    const segundosv = Math.floor(tsegundosv) % 60;

    diasvEl.innerHTML = diasv;
    horasvEl.innerHTML = horasv;
    minutosvEl.innerHTML = minutosv;
    segundosvEl.innerHTML = segundosv;
    
  
}

countdownv();
setInterval(countdownv, 1000);



const diasoEl = document.getElementById('diaso');
const horasoEl = document.getElementById('horaso');
const minutosoEl = document.getElementById('minutoso');
const segundosoEl = document.getElementById('segundoso');

const autumn = "20 Mar 2022";

function countdowno(){
    const autumnDate = new Date(autumn);
    const currentDateo = new Date();

    const tsegundoso = (autumnDate - currentDateo) / 1000;

    const diaso = Math.floor(tsegundoso / 3600 / 24);
    const horaso = Math.floor(tsegundoso / 3600) % 24;
    const minutoso = Math.floor(tsegundoso / 60) % 60;
    const segundoso = Math.floor(tsegundoso) % 60;

    diasoEl.innerHTML = diaso;
    horasoEl.innerHTML = horaso;
    minutosoEl.innerHTML = minutoso;
    segundosoEl.innerHTML = segundoso;
    
  
}

countdowno();

setInterval(countdowno, 1000);

const diasiEl = document.getElementById('diasi');
const horasiEl = document.getElementById('horasi');
const minutosiEl = document.getElementById('minutosi');
const segundosiEl = document.getElementById('segundosi');

const winter = "21 June 2022";

function countdowni(){
    const winterDate = new Date(winter);
    const currentDatei = new Date();

    const tsegundosi = (winterDate - currentDatei) / 1000;

    const diasi = Math.floor(tsegundosi / 3600 / 24);
    const horasi = Math.floor(tsegundosi / 3600) % 24;
    const minutosi = Math.floor(tsegundosi / 60) % 60;
    const segundosi = Math.floor(tsegundosi) % 60;

    diasiEl.innerHTML = diasi;
    horasiEl.innerHTML = horasi;
    minutosiEl.innerHTML = minutosi;
    segundosiEl.innerHTML = segundosi;
    
  
}

countdowni();
setInterval(countdowni, 1000);


const diasipEl = document.getElementById('diasp');
const horasipEl = document.getElementById('horasp');
const minutosipEl = document.getElementById('minutosp');
const segundosipEl = document.getElementById('segundosp');

const spring = "22 Sept 2022";

function countdownip(){
    const springDate = new Date(spring);
    const currentDateip = new Date();

    const tsegundosip = (springDate - currentDateip) / 1000;

    const diasip = Math.floor(tsegundosip / 3600 / 24);
    const horasip = Math.floor(tsegundosip / 3600) % 24;
    const minutosip = Math.floor(tsegundosip / 60) % 60;
    const segundosip = Math.floor(tsegundosip) % 60;

    diasipEl.innerHTML = diasip;
    horasipEl.innerHTML = horasip;
    minutosipEl.innerHTML = minutosip;
    segundosipEl.innerHTML = segundosip;
    
  
}

countdownip();
setInterval(countdownip, 1000);