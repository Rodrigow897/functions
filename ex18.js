function desconto(valor, porcentagem) {
   return console.log("Com desconto de " + porcentagem + "% o valor total fica :", valor - (valor * (porcentagem / 100)));
}

desconto(100, 10)