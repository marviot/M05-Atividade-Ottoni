// gerar um retangulo a partir da entrada de altura e largura
const prompt = require("prompt-sync")();
/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});  ----  codigo gerado pelo chatgpt*/

function desenharRetangulo(altura, largura) {
    let retangulo = '';
    for (let i = 0; i < altura; i++) {
        for (let j = 0; j < largura; j++) {
            retangulo += '* ';
        }
        if (i+1 == altura) retangulo += '\n';
    }
    return retangulo;
}

let altura = 0;
let largura = 0;

let imprime = prompt("Deseja imprimir um retangulo? (s/n): ");
if (imprime == 's') {
    let altura = prompt("Digite a altura do retangulo: ");
    let largura = prompt("Digite a largura do retangulo: ");
    if (altura > 0 && largura > 0) {
        if (largura <= altura) {
            console.log("A largura deve ser maior que a altura.");
            return;
        }
        console.log(desenharRetangulo(altura, largura));
    }
    else {
        console.log("Altura e largura devem ser maiores que zero.");
    } 
}

/*function desenharRetangulo() {
  rl.question('Informe se deseja imprimir um retângulo? (s/n): ', (resposta) => {
    if (resposta.toLowerCase() !== 's') {
      rl.close();
      return;
    }

    rl.question('Informe a altura do retângulo (maior que zero): ', (altura) => {
      rl.question('Informe a largura do retângulo (maior que zero e maior que a altura): ', (largura) => {
        altura = parseInt(altura);
        largura = parseInt(largura);

        if (isNaN(altura) || isNaN(largura) || altura <= 0 || largura <= 0 || largura <= altura) {
          console.log('Entradas inválidas. Certifique-se de que a altura é maior que zero e a largura é maior que a altura.');
          desenharRetangulo();
        } else {
          // Desenha o retângulo
          for (let i = 0; i < altura; i++) {
            let linha = '';
            for (let j = 0; j < largura; j++) {
              linha += '* ';
            }
            console.log(linha);
          }

          // Pergunta novamente
          desenharRetangulo();
        }
      });
    });
  });
}

// Inicia o programa
desenharRetangulo();*/


