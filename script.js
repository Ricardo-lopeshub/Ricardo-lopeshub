
var inputPeso = document.getElementById('peso')
var inputAltura = document.getElementById('altura')

function calcular(){
    var peso = inputPeso.value
    var altura = inputAltura.value

    if (altura > 3){
        var altura = altura / 100
    } else{
        var altura = altura 
    }

    var imc = (peso / (altura * altura)).toFixed(1)    

    resultado.innerHTML = `<p> seu imc é <strong>${imc} kg/m²,</strong></p>`

    if (imc < 18.5){
        resultado.innerHTML += `<p> Coma mais calorias, você está abaixo do peso </p>`
    } else if(imc < 25){
        resultado.innerHTML += `<p> Parabéns, você está no peso ideal </p>`
    } else if(imc < 30){
        resultado.innerHTML += `<p> Cuidado, você está com sobre peso </p>`
    } else if(imc < 40){
        resultado.innerHTML += `<p> Cuidade, você está com obesidade </p>`
    } else{
        resultado.innerHTML += `<p> Muito cuidado, você está com obesidade mórbida </p>`
    }


}






