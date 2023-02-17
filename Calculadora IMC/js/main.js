function calcular() {
    var valorPeso = document.getElementById('peso')
    var peso = Number(valorPeso.value)
    var valorAltura = document.getElementById('altura')
    var altura = parseFloat(valorAltura.value)

    var calcularIMC = Math.floor(peso / (altura ** 2))


    resultado.innerText = `Seu IMC: ${calcularIMC}`


    if (calcularIMC < 18) {

        nivel.innerText = `Classificação: Magreza!`

    }
    if (calcularIMC >= 18 && calcularIMC <= 24) {

        nivel.innerText = `Classificação: Normal!`

    }
    if (calcularIMC >= 25 && calcularIMC <= 29) {

        nivel.innerText = `Classificação: Sobrepeso!`
    }
    if (calcularIMC >= 30 && calcularIMC <= 39) {

        nivel.innerText = `Classificação: Obesidade!`

    }
    if (calcularIMC > 40) {

        nivel.innerText = `Classificação: Obesidade Grave!!!`

    }

}