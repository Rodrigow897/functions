function soma(numeros = new Array(5)) {
    let resultado = 0
    for (i = 0; i < numeros.length; i++) {
        resultado += numeros[i]
    }
    return resultado
}


console.log("O resultado da soma é: " + soma([20,14,13, 4, 5]))