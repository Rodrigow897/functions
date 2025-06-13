function Verificar(num) {
    if(num === 0) {
        return console.log("é zero")
    } else if(num < 0) {
        return console.log("é negativo")
    } else {
        return console.log("é positivo")
    }
}

Verificar(-1)