function saudacao(nomes = []) {
    for (i = 0; i < nomes.length; i++){
        console.log("Olá, " + nomes[i])
    }
}

saudacao(["Rodrigo", "Julio", "Elias", "Leo", "David", "Thigas", "Matheus"])