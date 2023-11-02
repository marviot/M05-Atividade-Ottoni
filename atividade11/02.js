const prompt = require("prompt-sync")();

let num_entrada = 1;
let soma = 0;
let contador = 0;
let media = 0;

while (true) {
   
    num_entrada = parseInt( prompt("Digite um numero (0 para sair): "));

    if (num_entrada == 0) {
        break;
    }
    soma += num_entrada;
    contador++;
   // console.log(`Soma: ${soma}`);
   // console.log(`Contador: ${contador}`);
}

if (contador == 0) {
    console.log("Nenhum número foi digitado.");
    return;
}
else {
    media = soma / contador;

    console.log(`A média dos números digitados é ${media}`);
}