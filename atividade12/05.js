// inverter uma string utilizando o comando for

const prompt = require('prompt-sync')();

let texto = prompt('Digite um texto: ');

let textoInvertido = '';

for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
}

console.log('Texto invertido: ' + textoInvertido);