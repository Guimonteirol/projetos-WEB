const form = document.querySelector('#fimc')

form.addEventListener('submit', function(e){
    e.preventDefault(); // não renicia a página
    const ipeso = e.target.querySelector('#peso')
    const ialtura = e.target.querySelector('#altura')
    const peso = Number(ipeso.value)
    const altura = Number(ialtura.value)
    if (!peso){
        sresultado('O peso inserido é inválido.', false)
        return;
    }
    if (!altura){
        sresultado('A altura inserida é inválida.', false)
        return;
    }
    const imc = cimc(peso, altura)
    const resimc = rimc(imc)
    const msg = `O seu IMC é: ${imc} \n Corresponde a: ${resimc}.`

    sresultado(msg, true)
})

function rimc (imc){
    const nivel = ['Muito abaixo do peso','Abaixo do peso','Peso normal','Acima do peso','Obesidade I','Obesidade II (severa)', 'Obesidade III (mórbida)']
    if (imc >= 39.99) return nivel[6]
    if (imc >= 34.99) return nivel[5]
    if (imc >= 29.99) return nivel[4]
    if (imc >= 24.99) return nivel[3]
    if (imc >= 18.49) return nivel[2]
    if (imc >= 17)    return nivel[1]
    if (imc < 17)     return nivel[0]
}

function cimc(peso, altura){
    const imc = peso / (altura*altura);
    return imc.toFixed(2);
}

function pcria (){
    const p = document.createElement('p')
    p.classList.add('pres')
    return p;
}

function sresultado (msg, isValid){ // escrever resultado
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''
    const p = pcria();
    if (isValid){ p.classList.add('pres')
    } else p.classList.add('pnot')
    p.innerHTML = msg
    resultado.appendChild(p)
}