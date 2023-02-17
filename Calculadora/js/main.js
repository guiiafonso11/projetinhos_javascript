function somar(){ 
    var numero1 = document.getElementById('numero1')
    var num1Valor = Number(numero1.value)
    var numero2 = document.getElementById('numero2')
    var num2Valor = Number(numero2.value)
    
    var soma = num1Valor + num2Valor

    resultado.innerText =`RESULTADO = ${soma}`
   }

   function subtrair(){
    var numero1 = document.getElementById('numero1')
    var num1Valor = Number(numero1.value)
    var numero2 = document.getElementById('numero2')
    var num2Valor = Number(numero2.value)
    var subtrair = num1Valor - num2Valor

    resultado.innerText =`RESULTADO = ${subtrair}`
   }

   function dividir(){
    var numero1 = document.getElementById('numero1')
    var num1Valor = Number(numero1.value)
    var numero2 = document.getElementById('numero2')
    var num2Valor = Number(numero2.value)
    var dividir = num1Valor / num2Valor

    resultado.innerText =`RESULTADO = ${dividir}`
    
   }

   function multiplicar(){
    var numero1 = document.getElementById('numero1')
    var num1Valor = Number(numero1.value)
    var numero2 = document.getElementById('numero2')
    var num2Valor = Number(numero2.value)
    var multiplicar = num1Valor * num2Valor

    resultado.innerText =`RESULTADO = ${multiplicar}`
   }