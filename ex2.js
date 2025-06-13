const prompt = require("prompt-sync")()

function Saudacao (nome) {
    console.log("Olá ",nome)
}

let nome = prompt("Digite seu nome: ");

Saudacao(nome);