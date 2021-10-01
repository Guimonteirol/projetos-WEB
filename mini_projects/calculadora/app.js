let valida = true;
function botao(num){
    if(valida){
        limpar();
        valida = false;
    }
    let numero =  document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    
}

function limpar(){
    document.getElementById('resultado').innerHTML = "";
}

function calcular(){
    let result = document.getElementById('resultado').innerHTML;
    if(result){
    document.getElementById('resultado').innerHTML = eval(result);
    }
    else{
    document.getElementById('resultado').innerHTML = "Digite a operação"
    valida = true;
    }

}

