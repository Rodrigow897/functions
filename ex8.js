function Nascimento(nascimento) {
    const data = new Date().getFullYear()
    return data - nascimento
}

console.log(Nascimento(2000))